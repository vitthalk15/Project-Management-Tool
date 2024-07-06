import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withdrawTask, extendTaskDeadline, moveTaskToDoing, markTaskAsDone } from '../store/actions/taskActions';

const TaskList = ({ projectId, status }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks[projectId] || []);
  
  const filteredTasks = tasks.filter(task => task.status === status);

  const handleWithdrawTask = (taskId) => {
    dispatch(withdrawTask(projectId, taskId));
  };

  const handleExtendDeadline = (taskId, newDeadline) => {
    dispatch(extendTaskDeadline(projectId, taskId, newDeadline));
  };

  const handleMoveToDoing = (taskId) => {
    dispatch(moveTaskToDoing(projectId, taskId));
  };

  const handleMarkAsDone = (taskId) => {
    dispatch(markTaskAsDone(projectId, taskId));
  };

  return (
    <div className="space-y-4">
      {filteredTasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        filteredTasks.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded shadow-md dark:bg-gray-800">
            <h3 className="font-bold">{task.name}</h3>
            <p>{task.description}</p>
            <p>Creation Date: {task.creationDate}</p>
            <p>Deadline: {task.deadline}</p>
            <div className="flex space-x-2 mt-2">
              {status === 'todo' && (
                <button
                  onClick={() => handleMoveToDoing(task.id)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Move to Doing
                </button>
              )}
              {status === 'doing' && (
                <button
                  onClick={() => handleMarkAsDone(task.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  Mark as Done
                </button>
              )}
              <button
                onClick={() => handleWithdrawTask(task.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Withdraw
              </button>
              <button
                onClick={() => {
                  const newDeadline = prompt('Enter new deadline (in days, hours, mins)');
                  if (newDeadline) handleExtendDeadline(task.id, newDeadline);
                }}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
              >
                Extend Deadline
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
