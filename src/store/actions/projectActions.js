export const addProject = (project) => {
  return {
    type: 'ADD_PROJECT',
    payload: project
  };
};

export const updateProjectStatus = (projectId, status) => {
  return {
    type: 'UPDATE_PROJECT_STATUS',
    payload: { projectId, status }
  };
};

export const withdrawProject = (projectId) => {
  return {
    type: 'WITHDRAW_PROJECT',
    payload: projectId
  };
};

export const extendProjectDeadline = (projectId, additionalTime) => {
  return {
    type: 'EXTEND_PROJECT_DEADLINE',
    payload: { projectId, additionalTime }
  };
};
