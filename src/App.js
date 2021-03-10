import { getByPlaceholderText } from "@testing-library/react";
import React, { useState } from "react";


const App = () => {

  const [name, setName] = useState("");
  
  const [lastName, SetLastName] = useState("");

  const [fullName, setFullName] = useState("");


  const [lastOneName, setNameLast] = useState("");

  const InputEvent =(event) =>{
    setName(event.target.value);
  };

  // const InputEventHandler =(event) =>{
    // SetLastName(event.target.value);
  // };

  const onSubmit =() =>{
    setFullName(name);
    setNameLast(lastName)
  }
  // const onSubmit =() =>{
    // setNameLast(lastName)
  // }


  // const state = useState();

  // const [count, setCount] =useState(0);

  // const IncNum = () =>{
  //   setCount(count +1);
  // };

  // const DecNum = () => {
  //   setCount(count -1);
  // };

  // const DefNum =() =>{
  //   setCount(100);
  // };

  const InputEventTwo =(event) => {
    SetLastName(event.target.value)
  };


  return(
    <div>
      <form onSubmit={onSubmit}>
        <h1>
          History
          <br />
          {fullName}
        </h1>
        <input
        type="text"
        placeholder="" onChange={InputEvent}
        value={name}/>
        <br />
        <br />
        <h3>
          Transection
          <br />
          {lastOneName }
          </h3>
        <input
        type="text"
        placeholder="" onChange={InputEventTwo}
        value={lastName}/>
        <br />
      <button type="submit">Submit</button>
      </form>

      {/* <button onClick={IncNum}>Increment</button>
      <button onClick={DecNum}>Decrement</button>
      <button onClick={DefNum}>Default</button> */}
    </div>
  )
};
export default App;