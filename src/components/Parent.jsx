// Parent Component
import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  return (
    <div className="flex flex-col justify-center items-center m-3">
      <h1>Count in Parent: {count}</h1>
      <button className="bg-teal-700 text-white p-1 rounded" onClick={incrementCount}>Increment Count(Parent)</button>
      <Child count={count} onCountIncerement={incrementCount}/>
    </div>
  );
}

export default Parent;
