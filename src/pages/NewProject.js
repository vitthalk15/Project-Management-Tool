import React from 'react';
import ProjectForm from '../components/ProjectForm';

const NewProject = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
      <ProjectForm />
    </div>
  );
};

export default NewProject;
