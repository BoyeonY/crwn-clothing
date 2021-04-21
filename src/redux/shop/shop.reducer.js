import Shop_Data from './shop.data';

const INITIATE_STATE = {
    collections: Shop_Data

}

const shopReducer = (state=INITIATE_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default shopReducer;
