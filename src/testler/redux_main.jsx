import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, haddleInputToplama, haddleInputCix, haddleInputVur, haddleInputBol ,resetCount,yuvarlaYuxari,yuvarlaAsaqi } from '../Redux/calc'

export function Calc() {
  const [inp, setinp] = useState("")
  const count = useSelector((state) => state.calc_main.value)
  const daxil = useSelector((action) => action.calc_main.value)
  const dispatch = useDispatch()

  const handleButtonClick = (operation) => {
    dispatch(operation(+inp));
    setinp(""); 
  };
  const clear=()=>{
    setinp("")
  }
  // const yuvarla=()=>{
  //   setinp(Math.ceil())
  // }

  return (
    <div>
      <div>
      <button onClick={() => dispatch(resetCount())}>C</button>
      <button onClick={() => dispatch(yuvarlaYuxari())}> yuxari yuvarla</button>
      <button onClick={() => dispatch(yuvarlaAsaqi())}> asaqi yuvarla</button>
       
        <span>action.payload bunun ne olduqunu anlayaq {daxil}</span>
        <hr />
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>

        <input type="text" value={inp} onChange={(e) => setinp(e.target.value)} />
        <button onClick={() => clear()}>sifirla</button>
        <button onClick={() => handleButtonClick(haddleInputToplama)}>topla</button>
        <button onClick={() => handleButtonClick(haddleInputCix)}>cix</button>
        <button onClick={() => handleButtonClick(haddleInputVur)}>vur</button>
        <button onClick={() => handleButtonClick(haddleInputBol)}>bol</button>
      </div>
    </div>
  )
}
