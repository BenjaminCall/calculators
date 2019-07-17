import React, { useState } from 'react';

export default function () {

  const [P, setP] = useState(0);
  const [r, setR] = useState(0);
  const [n, setn] = useState(0);
  const [t, sett] = useState(0);
  const [total, setTotal] = useState(0);
  const convertRate = n => setR(n / 100)
  let raised = n*t
  const calcTotal = () => {setTotal((P * Math.pow((1 + (r/n)), (n*t))).toFixed(2))}

  return <div>
      <div>
        <label>
          Principle
          <input defaultValue={0} onChange={e => setP(e.target.value)} />
        </label>
      </div>
      <div><label>
        Rate %
        <input defaultValue={0} onChange={e => convertRate(e.target.value)} />
      </label></div>
      <div><label>
        Compound Rate (n)
        <input defaultValue={0} onChange={e => setn(e.target.value)} />
      </label></div>
      <div><label>
        Time (in years)
        <input onChange={e => sett(e.target.value)} />
      </label></div>

      <button onClick={() => calcTotal()}>Calculate</button>
      <div>Total: {total }, with Interest gained of: {total - P} </div>
    </div>
}