import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incerment } from '../Redux/counterSliceVol_2'

function Test_2() {
    const count=useSelector((state)=>state.counter_2.value)
    const dispatch=useDispatch()
const onePlus=()=>{
    dispatch(incerment())
}
    
  return (
    <div>
        asdsa
        <button onClick={onePlus}>+1</button>
        <h2>{count}</h2>
    </div>
  )
}

export default Test_2