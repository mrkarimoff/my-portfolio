'use client';

import { ReactNode, useReducer } from 'react';
import ActionTypes from '~/store/actionTypes';
import { initialState, reducer } from '~/store/reducer';
import Context from '~/utils/context';

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        isOpenDrawer: state.isOpenDrawer,
        activeIndex: state.activeIndex,
        currentCard: state.currentCard,
        toggleDrawer: (value?: boolean) =>
          dispatch({ type: ActionTypes.TOGGLE_DRAWER, payload: value }),
        setActiveIndex: (value: number) =>
          dispatch({ type: ActionTypes.SET_ACTIVE_INDEX, payload: value }),
        setCurrentCard: (value: string) =>
          dispatch({ type: ActionTypes.SET_CURRENT_CARD, payload: value }),
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
