import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage =>({
    type: ShopActionTypes.fetchCollectionsFailure,
    payload: errorMessage

})

// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections');
        
//         dispatch(fetchCollectionsStart());

  
//         collectionRef.get().then(snapshot => {
//         const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//     }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
//     }

    //Onsnapshot
     // promise patten - 1. get
  //   collectionRef.get().then(snapshot => {
  //     const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
  //     updateCollections(collectionsMap);
  //     this.setState({loading: false});
  //   })

    //promise patten - 2. fetch
  // fetch().then(response => response.json()).then(collection => console.log(collection))
  //   this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
  //     const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
  //     updateCollections(collectionsMap);
  //     this.setState({loading: false});
  //   })
  // }}
 






