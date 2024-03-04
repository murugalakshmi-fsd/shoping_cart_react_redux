import { createSlice } from "@reduxjs/toolkit";

export const productslice=createSlice({
  name:'product',
  initialState:{
   products: []
},
  reducers:{
    loadProducts:(state,action)=>{
        console.log('Payload:', action.payload);
        state.products = action.payload;
    },
  },
})
export const {loadProducts}=productslice.actions;
export default productslice.reducer