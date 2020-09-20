import React, { useState } from 'react';

function UseStateObject() {

  let data = {
    firstName: '',
    lastName: ''
  }

  const [dataObject, setData] = useState(data)

  const updateFirstName = (e) => setData({ ...dataObject, firstName: e.target.value });
  const updateSecondName = (e) => setData({ ...dataObject, secondName: e.target.value });

  return (
    <div>
      <input type="text" placeholder="first name" onChange={updateFirstName} />
      <input type="text" placeholder="second name" onChange={updateSecondName} />
      <p>{dataObject.firstName} firstName</p>
    </div>
  )
}

export default UseStateObject;
