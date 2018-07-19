const initialState = {
    login: "",
    password: "",
    Bank: 123,
    Lemons: 12,
    squash: 10,
    blueberries: 0,
    product: 123,
    gardenGrowth: 0,
    flour: 10,
    sugar: 100,
    productPrice: 0,
    winnings: 0 ,
    water: false,
    harvested:false,
    cooked: false,
    weeded: false

}


const reducer = (state = initialState, action) => {
    if (action.type === 'SAVE') {
         return Object.assign({}, state, { Bank: state.Bank + action.Bank }),
         Object.assign({}, state, { product: state.product - action.inventory })
    } else if(action.type === "GAME") {
        console.log(state.winnings + state.Bank)
    } else if(action.type === 'SAVEPROD'){
        return Object.assign({}, state, { product: state.product - action.inventory })
    }
    return state;
    

};

export default reducer;