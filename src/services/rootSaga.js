import { all, delay, take } from 'redux-saga/effects'

import { gameUISagas } from './gameUI/sagas';
import { socketConnectionSagas } from './socketConnection/sagas';

export default function* rootSaga() {
  yield all([
    ...gameUISagas,
    ...socketConnectionSagas
  ]);
}
