import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)


export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

// memoize- by wrapping this function is memoize, whenever this function gets called and receives collectionUrlParam, return of this function is being memoized.
//if this function gets called again with the same 'collectionUrlParm' it won't be rerunned 
export const selectCollection = (collectionUrlParam) => 
createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]);