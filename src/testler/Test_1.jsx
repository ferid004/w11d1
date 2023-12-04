import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { artim, azalma, inputTopla } from '../Redux/counterSliceVol_1'

function Test_1() {
    const count= useSelector((state)=>state.counter_1.value)
     const dispatch=useDispatch()
     const art=()=>{
        dispatch(artim())
     }
     const az=()=>{
        dispatch(azalma())
     }
     const inp=()=>{
        dispatch(inputTopla(3))
     }
  return (
    <div>
        <h1>sasa{count}</h1>
        <button onClick={art}>+</button>
        <button onClick={az}>------</button>
        <button onClick={inp}>+++++</button>
    </div> 
  )
}

export default Test_1