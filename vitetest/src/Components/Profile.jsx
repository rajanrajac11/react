import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <h1>Please Login</h1>;
  else {
    return <h1>Welcome {user.username}</h1>;
  }
}

export default Profile;
