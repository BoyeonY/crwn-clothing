import {takeLatest, all, call, put} from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import {clearCart} from './cart.actions';

export function* cleaerCartOnSignOut(){
    yield put(clearCart());
}

export function* onSignoutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,cleaerCartOnSignOut)
}

export function* cartSagas(){
    yield(all([call(onSignoutSuccess)]));
}