import { all, call} from 'redux-saga/effects';
import { cartSagas } from './cart/cart.sagas';
import {userSagas} from './user/user.sagas';
import{shopSaga} from './shop/shop.sagas';

export default function* rootSaga(){
    yield all ([call(shopSaga), call(userSagas), call(cartSagas)]);
}