import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setUser({ username, password });
  }
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name=""
        id=""
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Login;
