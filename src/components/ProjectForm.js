import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../store/actions/projectActions';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectCreationDate, setProjectCreationDate] = useState('');
  const [projectDeadline, setProjectDeadline] = useState('');
  const [projectOwner, setProjectOwner] = useState('');
  const [projectIncharge, setProjectIncharge] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProject({
      id: Date.now(),
      name: projectName,
      description: projectDescription,
      creationDate: projectCreationDate,
      deadline: projectDeadline,
      owner: projectOwner,
      incharge: projectIncharge,
      status: 'todo'
    }));
    setProjectName('');
    setProjectDescription('');
    setProjectCreationDate('');
    setProjectDeadline('');
    setProjectOwner('');
    setProjectIncharge('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-4">
      <div>
        <label htmlFor="projectName" className="block mb-2">Project Name</label>
        <input
          id="projectName"
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="border p-2 rounded w-full dark:bg-gray-700 dark:text-white focus:bg-yellow-200"
        />
      </div>
      <div>
        <label htmlFor="projectDescription" className="block mb-2">Project Description</label>
        <textarea
          id="projectDescription"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          className="border p-2 rounded w-full dark:bg-gray-700 dark:text-white focus:bg-yellow-200"
        />
      </div>
      <div>
        <label htmlFor="projectCreationDate" className="block mb-2">Project Creation Date</label>
        <input
          id="projectCreationDate"
          type="datetime-local"
          value={projectCreationDate}
          onChange={(e) => setProjectCreationDate(e.target.value)}
          className="border p-2 rounded w-full dark:bg-gray-700 dark:text-white focus:bg-yellow-200"
        />
      </div>
      <div>
        <label htmlFor="projectDeadline" className="block mb-2">Project Deadline</label>
        <input
          id="projectDeadline"
          type="datetime-local"
          value={projectDeadline}
          onChange={(e) => setProjectDeadline(e.target.value)}
          className="border p-2 rounded w-full dark:bg-gray-700 dark:text-white focus:bg-yellow-200"
        />
      </div>
      <div>
        <label htmlFor="projectOwner" className="block mb-2">Project Owner</label>
        <input
          id="projectOwner"
          type="text"
          value={projectOwner}
          onChange={(e) => setProjectOwner(e.target.value)}
          className="border p-2 rounded w-full dark:bg-gray-700 dark:text-white focus:bg-yellow-200"
        />
      </div>
      <div>
        <label htmlFor="projectIncharge" className="block mb-2">Project Incharge</label>
        <input
          id="projectIncharge"
          type="text"
          value={projectIncharge}
          onChange={(e) => setProjectIncharge(e.target.value)}
          className="border p-2 rounded w-full dark:bg-gray-700 dark:text-white focus:bg-yellow-200"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Add Project
      </button>
    </form>
  );
};

export default ProjectForm;
