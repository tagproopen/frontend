import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import socketConnectionReducers from './socketConnection/reducers'
import gameUIReducers from './gameUI/reducers'

export default (history) => combineReducers({
  router: connectRouter(history),
  socketConnection: socketConnectionReducers,
  gameUI: gameUIReducers,
});
