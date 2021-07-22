function makeId(length = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export function setCartItems(cartItems) {
  return (dispatch) => {
    const action = {
      type: "SET_CART_ITEMS",
      cartItems,
    };
    dispatch(action);
  };
}

export function addCartItem(cartItem) {
  return (dispatch) => {
    console.log("ex: ", cartItem);
    const action = {
      type: "ADD_CART_ITEM",
      cartItem: { ...cartItem, cartItemId: makeId() },
    };
    dispatch(action);
  };
}

export function removeCartItem(cartItemId) {
  return (dispatch, getState) => {
    // console.log('removing from action: ', cartItemId)
    const action = {
      type: "REMOVE_CART_ITEM",
      cartItemId,
    };
    dispatch(action);
  };
}
