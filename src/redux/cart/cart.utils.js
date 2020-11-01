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
    console.log("items ===>>", cartItems);
    return [...cartItems];
  }
  return cartItems.concat({ ...cartItemToAdd, quantity: 1 });
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
