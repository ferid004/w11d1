import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0
}

const counterSliceVol_1=createSlice({
    name:"count",
    initialState,
    reducers:{
        artim:(state)=>{
            state.value=state.value+1
        },
        azalma:(state)=>{
            state.value=state.value-1
        },
        inputTopla:(state,action)=>{
            state.value=state.value+action.payload
        }
    }
})
export const {artim,azalma,inputTopla}=counterSliceVol_1.actions
export default counterSliceVol_1.reducer