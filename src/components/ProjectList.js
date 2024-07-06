import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from './TaskList';

const ProjectList = () => {
  const projects = useSelector((state) => state.projects);

  const projectColumns = [
    { status: 'todo', label: 'To Do', color: 'red' },
    { status: 'doing', label: 'Currently Doing', color: 'yellow' },
    { status: 'done', label: 'Done', color: 'green' },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {projectColumns.map((column) => (
        <div
          key={column.status}
          className="border p-4 rounded-t-lg shadow-md w-1/3 flex flex-col items-center dark:border-gray-700"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <span className={`w-3 h-3 rounded-full bg-${column.color}-500 inline-block mr-2`}></span>
            {column.label} ({projects.filter((project) => project.status === column.status).length})
          </h2>
          {projects
            .filter((project) => project.status === column.status)
            .map((project) => (
              <TaskList key={project.id} project={project} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
