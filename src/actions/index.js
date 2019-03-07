import { createAction } from 'redux-actions';

export const Type = {
  INIT_SOCKET_CONNECTION: 'INIT_SOCKET_CONNECTION',
  PLACE_IN_GAME: 'PLACE_IN_GAME',
};

export const placeInGame = createAction(Type.PLACE_IN_GAME);
export const initSocketConnection = createAction(Type.INIT_SOCKET_CONNECTION);