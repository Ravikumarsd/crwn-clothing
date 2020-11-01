export const addItemToCart = (cartItems, cartItemToAdd) => {
  const indexOfExistingCartItem = cartItems.findIndex(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (indexOfExistingCartItem !== -1) {
    const existingCartItem = cartItems[indexOfExistingCartItem];
    cartItems[indexOfExistingCartItem] = {
      ...existingCartItem,
      quantity: existingCartItem.quantity + 1,
    };

    return [...cartItems];
  }
  return cartItems.concat({ ...cartItemToAdd, quantity: 1 });
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const indexOfExistingCartItem = cartItems.findIndex(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  const existingCartItem = cartItems[indexOfExistingCartItem];
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  cartItems[indexOfExistingCartItem] = {
    ...existingCartItem,
    quantity: existingCartItem.quantity - 1,
  };
  return [...cartItems];
};

// export const addItemToCart = (cartItems, cartItemToAdd) => {
//     const existingCartItem = cartItems.find(
//       (item) => item.id === cartItemToAdd.id
//     );

//     if (existingCartItem) {
//       return cartItems.map((cartItem) =>
//         cartItem.id === cartItemToAdd.id
//           ? { ...cartItem, quantity: cartItem.quantity + 1 }
//           : cartItem
//       );
//     }
//     return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
//   };
