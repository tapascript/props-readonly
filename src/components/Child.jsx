// Child Component
import React from 'react';

function Child({ count, onCountIncerement }) {

  return (
    <div>
      <h2>Count in Child: {count}</h2>
      <button className="bg-teal-500 text-white p-1 rounded" onClick={onCountIncerement}>Change Count(Child)</button>
    </div>
  );
}

export default Child;
