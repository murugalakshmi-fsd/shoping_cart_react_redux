import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
    },
    reducers: {
        addItemToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeItemToCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateQuantityToCart: (state, action) => {
            const { id, quantity } = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);
            if (itemIndex !== -1) {
                const updatedItem={...state.items[itemIndex]};
                updatedItem.quantity=Math.max(1,quantity);
                state.items[itemIndex] = updatedItem;
                updatedItem.total = updatedItem.price * parseInt(updatedItem.quantity);

            }

        },
    },
})
export const {addItemToCart,removeItemToCart,updateQuantityToCart}=cartslice.actions;
export default cartslice.reducer;