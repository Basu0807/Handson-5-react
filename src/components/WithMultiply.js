import React, { useState } from 'react';

const WithMultiply = (WrappedComponent) => {
  const WithCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount((prevCount) =>prevCount+1);
    };
    const decrement = () => {
        setCount((prevCount) =>prevCount-1);
      };

    const product =()=>{
        setCount((prevCount)=>prevCount*prevCount)
    }
    const reset =()=>{
        setCount((prevCount)=>prevCount*0)
    }
    return <>
    <WrappedComponent count={count} increment={increment} product={product} reset={reset} decrement={decrement}/>
    </>;
  };

  return WithCounter;
};

export default WithMultiply;