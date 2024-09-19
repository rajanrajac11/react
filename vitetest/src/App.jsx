import React, { useEffect, useState } from "react";
import UserProvider from "./Context/UserProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <UserProvider>
      <Login />
      <Profile />
    </UserProvider>
  );
}

export default App;
