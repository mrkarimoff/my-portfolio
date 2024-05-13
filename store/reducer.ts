import ActionTypes from './actionTypes';
import { projectSchema, type Project } from '~/utils/constants';

type AppState = {
  isOpenDrawer: boolean;
  activeIndex: number;
  currentProject: Project | null;
};

type AppActions = {
  type: ActionTypes;
  payload?: AppState[keyof AppState];
};

export const initialState = {
  isOpenDrawer: false,
  activeIndex: 0,
  currentProject: null,
};

export function reducer(
  state: AppState = initialState,
  action: AppActions,
): AppState {
  switch (action.type) {
    case ActionTypes.TOGGLE_DRAWER: {
      if (action.payload !== undefined && typeof action.payload === 'boolean') {
        return { ...state, isOpenDrawer: action.payload };
      }
      return { ...state, isOpenDrawer: !state.isOpenDrawer };
    }

    case ActionTypes.SET_ACTIVE_INDEX: {
      if (action.payload === undefined || typeof action.payload !== 'number')
        throw new Error('Invalid action payload!');

      return { ...state, activeIndex: action.payload };
    }

    case ActionTypes.SET_CURRENT_PROJECT: {
      const result = projectSchema.safeParse(action.payload);

      if (action.payload === undefined || result.success === false)
        throw new Error('Invalid action payload!');

      return { ...state, currentProject: result.data };
    }
    default:
      throw new Error('Invalid action type');
  }
}
