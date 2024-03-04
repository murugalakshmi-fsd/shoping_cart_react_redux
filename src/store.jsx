import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartslice'
import productReducer from './slices/productslice'

export const store=configureStore({
    reducer:{
        product:productReducer,
        cart:cartReducer,
       
    }
 })
 const enhancedStore = store; 

export default enhancedStore;