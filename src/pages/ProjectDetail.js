import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = useSelector(state => state.projects[parseInt(projectId)]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
      <p className="mb-4">{project.description}</p>
      <p className="mb-4">Owner: {project.owner}</p>
      <p className="mb-4">In-charge: {project.inCharge}</p>
      <p className="mb-4">Created at: {new Date(project.createdAt).toLocaleDateString()}</p>
      <TaskForm projectId={projectId} />
      <TaskList projectId={projectId} />
    </div>
  );
};

export default ProjectDetail;
