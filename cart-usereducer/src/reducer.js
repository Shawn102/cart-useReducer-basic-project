const reducer = (state, action) => {
  if (action.type === "CLEAR") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    const filterCart = state.cart.filter(
      (filterItem) => filterItem.id !== action.payload
    );
    return { ...state, cart: filterCart };
  }
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  if (action.type === "COUNT_TOTAL") {
    let { amount, total } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        let totalPrice = price * amount;
        cartTotal.total += totalPrice;
        cartTotal.amount += amount;
        return cartTotal;
      },
      { amount: 0, total: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, amount, total };
  }
  if(action.type === 'LOADING') {
      return {...state, loading: true}
  }
  if(action.type === 'DATA_LOADED') {
      return {...state, cart: action.payload, loading: false}
  }
  return state;
};
export default reducer;
