import { configureStore, createReducer } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import wishSice from "./Slices/wishSice";
import cartSlice from "./Slices/cartSlice";
const productStore=configureStore({
    reducer:{
           productReducer:productSlice,
           wishReducer:wishSice,
           cartReducer:cartSlice

    }
})
export default productStore