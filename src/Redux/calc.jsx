import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

const calcSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    haddleInputToplama: (state, action) => {
      state.value += action.payload
    },
    haddleInputCix: (state, action) => {
      state.value -= action.payload
    },
    haddleInputVur: (state, action) => {
      state.value = (state.value+1)*action.payload
    },
    haddleInputBol: (state, action) => {
      state.value /= action.payload
    },
    resetCount: (state) => {
      state.value =0
    },
    yuvarlaYuxari: (state) => {
      state.value =Math.ceil(state.value)
    },
    yuvarlaAsaqi: (state) => {
      state.value =Math.floor(state.value)
    },

  },
})

export const { increment, decrement ,haddleInputToplama,haddleInputCix,
  haddleInputVur,haddleInputBol,resetCount,yuvarlaYuxari,yuvarlaAsaqi} = calcSlice.actions

export default calcSlice.reducer