import React from 'react';

const Counter = ({ count, increment, decrement, product,reset }) => {
  return (
    <div className=' box2'>
       <h1>Higher-Order Components — functions that return one or multiple components, depending on array data</h1>
        <h2>Square Calculator Using High Order Component</h2>
        <div className='NumberBox'>
        <h2>Count: </h2>
        <h3>{count}</h3>
      <button className="btn"onClick={increment}>+</button>
      <button className="btn" onClick={decrement}>-</button>
      </div>
      <div className='BtnBox'>
        <button onClick={product}>Get the Square of the number</button>
      <button  onClick={reset}>Reset</button>
      </div>
      

    </div>
  );
};

export default Counter;