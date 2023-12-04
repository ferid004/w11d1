import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value:0
}
const counterSliceVol_2=createSlice({
    name:"counter_2",
    initialState,
    reducers:{
        incerment:(state)=>{
            state.value=state.value+1
        }
    }
})
export const {incerment}=counterSliceVol_2.actions
export default counterSliceVol_2.reducer