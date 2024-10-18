import { useState } from "react";
import "./App.css";
import UserContext from "./Context/userContext";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>Hello everyone. Grinding is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}
export default App;
