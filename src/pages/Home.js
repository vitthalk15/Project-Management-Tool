import React from 'react';
import TaskList from './TaskList';
import { useSelector } from 'react-redux';

const Home = () => {
  const projects = useSelector((state) => state.projects);

  return (
    <div className="p-4">
      {projects.map((project) => (
        <div key={project.id} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-xl font-bold">Todo ({project.tasks.filter(task => task.status === 'todo').length})</h3>
              <TaskList projectId={project.id} status="todo" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Doing ({project.tasks.filter(task => task.status === 'doing').length})</h3>
              <TaskList projectId={project.id} status="doing" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Done ({project.tasks.filter(task => task.status === 'done').length})</h3>
              <TaskList projectId={project.id} status="done" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
