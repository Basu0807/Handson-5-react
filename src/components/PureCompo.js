import React, { useState } from 'react'


const PureCompo = ({product}) => {

    const [num,setNum] = useState(0);

  return (
    <div className='box1'>
        <h1>Pure Component-<p>A React component is considered pure if it renders the same output for the same state and props. </p></h1>
        
        <h2>Counter App With Pure Component</h2>
        <h3>{num}</h3>
        <button onClick={()=>setNum(num+1)}>Click Here to increase the value</button>
        <button onClick={()=>setNum(num-1)}>Click Here to decrease the value</button>
        <h1>{product}</h1>
        

    </div>
  )
}

export default PureCompo;