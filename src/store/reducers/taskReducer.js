const initialState = {
  tasks: {}
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.projectId]: [
            ...(state.tasks[action.payload.projectId] || []),
            action.payload.task
          ]
        }
      };
    case 'WITHDRAW_TASK':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.projectId]: state.tasks[action.payload.projectId].map(task =>
            task.id === action.payload.taskId ? { ...task, status: 'done' } : task
          )
        }
      };
    case 'EXTEND_TASK_DEADLINE':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.projectId]: state.tasks[action.payload.projectId].map(task =>
            task.id === action.payload.taskId ? { ...task, deadline: action.payload.newDeadline } : task
          )
        }
      };
    case 'MOVE_TASK_TO_DOING':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.projectId]: state.tasks[action.payload.projectId].map(task =>
            task.id === action.payload.taskId ? { ...task, status: 'doing' } : task
          )
        }
      };
    case 'MARK_TASK_AS_DONE':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.projectId]: state.tasks[action.payload.projectId].map(task =>
            task.id === action.payload.taskId ? { ...task, status: 'done' } : task
          )
        }
      };
    default:
      return state;
  }
};

export default taskReducer;
