const initialState={
    cartItems:0
}

function reducer(state=initialState,action){
    switch(action.type){
        case 'addtocart':{
            return {...state,data:state.data+1};
        }
        default:{
            return state
        }
    }
}
export default reducer;