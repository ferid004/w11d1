import { configureStore } from "@reduxjs/toolkit";
import counterSliceVol_1 from "./counterSliceVol_1";
import calc from "./calc";
import counterSliceVol_2 from "./counterSliceVol_2";
// import toduSlice from "./toduSlice";

export const store=configureStore({
    reducer:{
        counter_1:counterSliceVol_1,
        calc_main:calc,
        counter_2:counterSliceVol_2,
        // todu:toduSlice
    }
})