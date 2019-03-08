import Action from '../actionTypes';

const initialState = {
  initialized: false,
  connecting: false,
  socketConnected: false,
  socket: null,
};

const socketConnectionReducers = (state = initialState, action) => {
  switch (action.type) {
    case Action.SOCKET_CONNECTION_INIT:
      return { ...state, 
        initialized: true,
      }
    case Action.SOCKET_CONNECTION_START:
      return { ...state, 
        connecting: true, 
      };
    case Action.SOCKET_CONNECTION_SUCCEEDED:
      return { ...state, 
        connecting: false, 
        socketConnected: true, 
        socket: action.socket, 
      };
    case Action.SOCKET_CONNECTION_FAILED:
      return { ...state, 
        connecting: false,
        socketConnected: false,
      }
    default:
      return state;
  }
};

export default socketConnectionReducers;