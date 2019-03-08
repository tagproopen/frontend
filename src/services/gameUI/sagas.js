import { push } from 'connected-react-router'
import {
   delay,
   put,
   take, 
   takeLatest,
} from 'redux-saga/effects'
import Action from '../actionTypes';

function* redirectToHomePage() {
   yield put(push('/'));
}

function* initGameUI() {
   yield put(push('/game'));
}

export const gameUISagas = [
   takeLatest(Action.GAMEUI_INIT_GAME, initGameUI),
   takeLatest(Action.GAMEUI_NOT_INITED, redirectToHomePage),
];
