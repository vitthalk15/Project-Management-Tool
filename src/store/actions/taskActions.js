export const addTask = (projectId, task) => {
  return {
    type: 'ADD_TASK',
    payload: { projectId, task },
  };
};

export const withdrawTask = (projectId, taskId) => {
  return {
    type: 'WITHDRAW_TASK',
    payload: { projectId, taskId },
  };
};

export const extendTaskDeadline = (projectId, taskId, newDeadline) => {
  return {
    type: 'EXTEND_TASK_DEADLINE',
    payload: { projectId, taskId, newDeadline },
  };
};

export const moveTaskToDoing = (projectId, taskId) => {
  return {
    type: 'MOVE_TASK_TO_DOING',
    payload: { projectId, taskId },
  };
};

export const markTaskAsDone = (projectId, taskId) => {
  return {
    type: 'MARK_TASK_AS_DONE',
    payload: { projectId, taskId },
  };
};
