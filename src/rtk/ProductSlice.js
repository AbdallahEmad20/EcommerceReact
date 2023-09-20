import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export  const ProDetails=createAsyncThunk("detailsProduct", async(dataa)=>{
    const res =await fetch(`http://localhost:9000/products/${dataa}`)
    const data = await res.json()
    // data =action.payload
    console.log( "my pro" , data)
    return data
  })
  



export  const fetchProduct=createAsyncThunk("productSlice", async()=>{
    const res =await fetch("http://localhost:9000/products")
    const data = await res.json()
    // data =action.payload
    console.log(data)
    return data
  })
  

  const productSlice =createSlice({
    name: "product",
    initialState:{arr:[] , detail:[]},
    extraReducers:{
     [fetchProduct.fulfilled]:(state , action)=>{
      
      state.arr =action.payload
     },

     [ProDetails.fulfilled]:(state , action)=>{
         state.detail =action.payload
     }
    }
})





export default productSlice.reducer



