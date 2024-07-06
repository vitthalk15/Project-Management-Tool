const initialState = [];

const projectReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PROJECT':
      return [...state, action.payload];

    case 'UPDATE_PROJECT_STATUS':
      return state.map(project =>
        project.id === action.payload.projectId
          ? { ...project, status: action.payload.status }
          : project
      );

    case 'WITHDRAW_PROJECT':
      return state.map(project =>
        project.id === action.payload ? { ...project, status: 'withdrawn' } : project
      );

    case 'EXTEND_PROJECT_DEADLINE':
      return state.map(project =>
        project.id === action.payload.projectId
          ? { ...project, deadline: new Date(new Date(project.deadline).getTime() + action.payload.additionalTime).toISOString() }
          : project
      );

    default:
      return state;
  }
};

export default projectReducer;
