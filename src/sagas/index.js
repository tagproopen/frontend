import { all } from 'redux-saga/effects'
import socketSagas from './socketSagas';

export default function* rootSaga() {
  yield all([
    socketSagas
  ]);
}
