import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:{
        items:[]
    },
    reducers:{
        addToWishlist(state,action){
            const existing =state.items.find(item=>item.id==action.payload.id)
            if(existing){
                toast.warning('Product Already Added to wishList  !!')
            }else{
                state.items.push(action.payload)
                toast.success('Item Added To WishList')
            }
           
        },
        removeFromwishList(state,action){
            state.items=state.items.filter(item=>item.id!=action.payload)
        }
    }
})
export default wishlistSlice.reducer
export const {addToWishlist,removeFromwishList}=wishlistSlice.actions