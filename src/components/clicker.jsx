import React, { useState } from 'react';

export default function () {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const multiply = (a) => setNumber(a * 2)

  return <div>
      <div>You clicked me {count} times</div>
      <div>Input * 2  = {number} </div>
      <button onClick={() => setCount(count + 1)}>Clicker</button>
      <input defaultValue={0} onChange={e => multiply(e.target.value)} />
    </div>
}