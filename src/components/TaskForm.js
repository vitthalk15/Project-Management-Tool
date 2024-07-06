import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions/taskActions';

const TaskForm = ({ projectId }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDeadline, setTaskDeadline] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({
      id: Date.now(),
      name: taskName,
      deadline: taskDeadline,
      projectId: parseInt(projectId),
      status: 'todo',
      createdAt: new Date().toISOString()
    }));
    setTaskName('');
    setTaskDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="datetime-local"
        value={taskDeadline}
        onChange={(e) => setTaskDeadline(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
