export const addItemToCart = (cartItems, cartItemToAdd) => {
  const indexOfExistingCartItem = cartItems.findIndex(
    (item) => item.id === cartItemToAdd.id
  );
  if (indexOfExistingCartItem !== -1) {
    const existingCartItem = cartItems[indexOfExistingCartItem];
    cartItems[indexOfExistingCartItem] = {
      ...existingCartItem,
      quantity: existingCartItem.quantity + 1,
    };
    return cartItems;
  }
  return cartItems.concat({ ...cartItemToAdd, quantity: 1 });
};
