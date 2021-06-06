import {takeEvery, call, put, all} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapShotToMap} from '../../firebase/firebase.utils';
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions';

export function* fetchCollectionsAsync(){
    yield console.log("I'm fired");

    try{
    const collectionRef = firestore.collection('collections');
    // when this value comes back?, it comes back in a promise form that gets resolved with 
    //the value of our collection reference whic is our snapshot
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call (convertCollectionsSnapShotToMap,snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(error){
        yield put(fetchCollectionsFailure(error.message))
    }
}



// takeEvery: create a non-blocking call in order to not stop our app to continue running 
// either other sagas or whatever the user whatns to do, it doesn't pause the javascript waiting for anything insdie of out fetch collections asynce to come back 

export function* fetchCollectionsStart(){
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync);
}

export function* shopSaga(){
    yield all([call(fetchCollectionsStart)])
}