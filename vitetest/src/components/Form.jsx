import React, { useState } from "react";
import useUser from "../ContextProvider/ContextProvider";

function Form() {
  const { setUsername } = useUser();
  const [name, setName] = useState("");

  function submitHandler() {
    setUsername(name);
  }
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={submitHandler}>Submit</button>{" "}
    </div>
  );
}

export default Form;
