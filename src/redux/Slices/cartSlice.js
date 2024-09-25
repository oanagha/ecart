import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartlistSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart(state,action){
            const existing=state.cart.find(item=>item.id==action.payload.id)
            if(existing){
                existing.quantity+=1
                state.cart=state.cart.filter(item=>item.id!=action.payload.id)
                state.cart.push(existing)
                toast.info('Item Quantity increased')
            }else{
                const product=action.payload
                product.quantity=1
                state.cart.push(product)
                toast.success('Product Added to Cart')
            }
        },
        removeFromCart(state,action){
            state.cart=state.cart.filter(item=>item.id!=action.payload)
            toast.success('Product Removed from  Cart')
        },
        increaeQuantity(state,action){
            const existing=state.cart.find(item=>item.id==action.payload)
            existing.quantity++
        },
        decreaseQuantity(state,action){
            const existing=state.cart.find(item=>item.id==action.payload)
            if(existing.quantity==1){
                state.cart=state.cart.filter(item=>item.id!=action.payload)
            }else{
                existing.quantity--
            }
        },
        checkOut(state,action){
            state.cart=[]
        }
    }
})
export default cartlistSlice.reducer
export const {removeFromCart,addToCart,increaeQuantity,decreaseQuantity,checkOut}=cartlistSlice.actions