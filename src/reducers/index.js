import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { Type } from '../actions'

const initialState = {
  meta: {
    inGame: false,
    connecting: false,
    socketConnected: false,
    socket: null,
    date: new Date(),
  }
};

const metaReducer = (state = initialState.meta, action) => {
  switch (action.type) {
    case 'CONNECTING':
      return { ...state, connecting: true, date: new Date()}
    case 'SOCKET_CONNECTION_SUCCEEDED':
      return { ...state, connecting: false, socketConnected: true, socket: action.socket, date: new Date()}
    case 'SOCKET_CONNECTION_FAILED':
      return { ...state, connecting: false, socketConnected: false, date: new Date() }
    case Type.PLACE_IN_GAME:
      return { ...state, inGame: true}
    default:
      return state;
  }
};

export default (history) => combineReducers({
  router: connectRouter(history),
  meta: metaReducer,
});