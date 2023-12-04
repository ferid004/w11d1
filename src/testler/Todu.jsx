// import { v4 as uuidv4 } from 'uuid';
// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addTodu } from '../Redux/toduSlice'

// function Todu() {
//     const [input, setInput] = useState([])
//     const todus=useSelector((state)=>state.todu.value)
//     const dispatch=useDispatch()

//     const handleInput=()=>{
//         if(!input) return;
//         dispatch(addTodu({
//             id:uuidv4(),
//             text:input
//         }))
//     }
//   return (
//     <div>
//         <p>{todus}</p>
//         <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
//         <button onClick={handleInput}>adddddd</button>
//         <ul>
//             {todus.map((todu)=>(
//                 <li key={todu.id}>
//                     {todu.text}
//                 </li>
//             )
//             )}
//         </ul>
//     </div>
//   )
// }

// export default Todu