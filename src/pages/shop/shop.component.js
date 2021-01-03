import React from 'react';
import Shop_Data from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';


class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: Shop_Data
        };
    }

    render(){
        const {collections} = this.state;

        return (
            <div className = 'shope-page'>

                {collections.map(({id, ...othersCollectionProps}) => (
                    <CollectionPreview key ={id} {...othersCollectionProps}/>
                ))}
            </div>
        );
    }           
}

export default ShopPage;