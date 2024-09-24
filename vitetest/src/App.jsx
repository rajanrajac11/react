import React, { useState } from "react";
import UserProvider from "./Context/UserProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  const [user, setUser] = useState("");
  return (
    <UserProvider values={{ user, setUser }}>
      <Login />
      <Profile />
    </UserProvider>
  );
}

export default App;
