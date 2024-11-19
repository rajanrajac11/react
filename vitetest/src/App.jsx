import React from "react";
import useUser, { UserProvider } from "./ContextProvider/ContextProvider";
import Form from "./components/Form";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="flex flex-wrap bg-gray-400 justify-center items-center w-full h-screen">
      <div>
        <UserProvider>
          <Form />
          <UserProfile />
        </UserProvider>
      </div>
    </div>
  );
}

export default App;
