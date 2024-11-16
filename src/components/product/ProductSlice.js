import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[]
}
const productSlice =  createSlice({
    name: 'products',
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            state.products= action.payload;
        },
        addProducts:(state,action)=>{
            state.products.push(action.payload);
        }
    }
})

export default productSlice.reducer;
export const {setProducts,addProducts} = productSlice.actions;
