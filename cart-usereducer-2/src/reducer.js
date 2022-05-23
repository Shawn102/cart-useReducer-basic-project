export const reducer = (state, action) => {
    if(action.type === 'CLEAR_FULL_LIST') {
        return {...state, carts: []}
    }
    if(action.type === 'REMOVE') {
        const filterCart = state.carts.filter(targetCart => targetCart.id !== action.payload);
        return {...state, carts:filterCart}
    }
    if(action.type === 'TOGGLE') {
        const tempCart = state.carts.map(cartItem => {
            if(cartItem.id === action.payload.id) {
                if(action.payload.theType === 'inc') {
                    return {...cartItem, amount: cartItem.amount + 1}
                }
                if(action.payload.theType === 'dec') {
                    return {...cartItem, amount: cartItem.amount - 1}
                }
            }
            return cartItem;
        }).filter(cartItem => cartItem.amount !== 0);
        return {...state, carts: tempCart};
    }
    if(action.type === "COUNT_TOTAL") {
        const myReducer = state.carts.reduce((cartTotal, cartItem)=> {
            const {price, amount} = cartItem;
            cartTotal.amount += amount;
            const prices = price * amount;
            cartTotal.total += prices;
            return cartTotal;
        }, {total: 0, amount: 0});

        let {total, amount} = myReducer;
        total = parseFloat(total.toFixed(2));

        return {...state, amount, total}
    }
    if(action.type === 'LOADING') {
        return {...state, loading: true}
    }
    if(action.type === 'DATA_LOADED') {
        return {...state, carts: action.payload, loading: false}
    }
    throw new Error('no matching action type');
}