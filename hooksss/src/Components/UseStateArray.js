import React, { useState } from 'react';

const UseStateArray = () => {

  const [arr, updateArr] = useState([1])

  const addArray = () => updateArr([...arr, arr[arr.length - 1] + 1]);

  return (
    <div>
      <button onClick={addArray}>useStateArray</button>
      <div>{arr.map(e => <p>{e}</p>)}</div>
    </div>
  )
}

export default UseStateArray;
