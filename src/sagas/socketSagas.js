import { eventChannel, END } from 'redux-saga';
import { 
   takeLatest, 
   take 
} from 'redux-saga/effects'


function waitForConnection(socket) {
   return eventChannel(emitter => {
      socket.on('connect', function () {
         emitter(END);
      });
      return () => socket.off('connect');
   });
}

function* initSocketConnection(action) {
   const socket = yield window.io.connect("http://localhost:2000");
   const chan = yield waitForConnection(socket);
   try {
      while (true) {
         yield take(chan)
      }
   } finally {
      console.log('socket connected');
   }
}

export default [
   takeLatest("INIT_SOCKET_CONNECTION", initSocketConnection),
];
