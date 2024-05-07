type AppState = {
  count: number;
};

type AppActions = {
  type: 'increment' | 'decrement';
  payload?: number;
};

export function reducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      throw new Error('Invalid action type');
  }
}
