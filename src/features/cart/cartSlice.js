import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cartItems")
const initialState ={
    items: savedCart ? JSON.parse(savedCart): [],
}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
addToCart: (state,action)=>{
    const exxistingItem = state.items.find(
        (item)=> item.id === action.payload.id
    )
    if(exxistingItem){
        exxistingItem.quantity+= action.payload.quantity;
    }else{
        state.items.push(action.payload)
    }
},
increaseQuantity :(state,action)=>{
    const item = state.items.find((item)=>
    item.id===action.payload);
    if(item){
        item.quantity+=1;
    }
},
decreaseQuantity:(state,action)=>{
const item=state.items.find(
    (item)=>item.id===action.payload
);
if(item&& item.quantity>1){
    item.quantity -=1;
}
},
removeFromCart: (state, action) => {
  state.items = state.items.filter(
    (item) => item.id !== action.payload
  );
},
clearCart:(state)=>{
    state.items= [];
}

    }
})

export const {addToCart ,increaseQuantity,decreaseQuantity,removeFromCart,clearCart} = cartSlice.actions;

export default cartSlice.reducer;