import Action from '../actionTypes';

const initialState = {
  initGame: false,
};

const gameUIReducers = (state = initialState, action) => {
  switch (action.type) {
    case Action.GAMEUI_INIT_GAME:
      return { ...state, 
        initGame: true,
      }
    default:
      return state;
  }
};

export default gameUIReducers;