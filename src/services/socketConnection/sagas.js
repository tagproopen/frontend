import { eventChannel, END } from 'redux-saga';
import {
   delay,
   put,
   take, 
   takeLatest,
} from 'redux-saga/effects'
import Action from '../actionTypes';


function waitForConnection(socket) {
   return eventChannel(emitter => {
      socket.on('connect', function () {
         emitter(END);
      });
      return () => socket.off('connect');
   });
}

function* initSocketConnection() {
   yield put({ type: Action.SOCKET_CONNECTION_START });
   const socket = yield window.io.connect("http://localhost:2000");

   const chan = yield waitForConnection(socket);
   try {
      while (true) {
         yield take(chan)
      }
   } finally {
      yield delay(350);
      yield put({ type: Action.SOCKET_CONNECTION_SUCCEEDED, socket });
      yield put({ type: Action.GAMEUI_INIT_GAME, socket })
   }
}

export const socketConnectionSagas = [
   takeLatest(Action.SOCKET_CONNECTION_INIT, initSocketConnection),
];
