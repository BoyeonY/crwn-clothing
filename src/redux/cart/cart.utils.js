//add Any funtions related to cart redux code here

export const addItemToCart = (cartItems, cartItemToAdd) => {
    // look inside of our existing car items to see if that cart item already exists 
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if(existingCartItem) {
        //cartItems.map will return us a new array. -> remember that we need to return new versions of our state so that
        // our components know to re render properly.
        return cartItems.map(cartItem => 
            cartItem.id=== cartItemToAdd.id
            ?{...cartItem, quantity:cartItem.quantity +1}
            : cartItem
        )
    }
    //If the car item is not found insdie of our array then we want to return a new array with all of our exisiting car item 
    return [...cartItems, {...cartItemToAdd, quantity:1}]
} 