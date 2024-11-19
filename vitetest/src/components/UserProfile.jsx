import React from "react";
import useUser from "../ContextProvider/ContextProvider";

function UserProfile() {
  const { username } = useUser();
  if (!username) {
    return <h3>Please Login</h3>;
  } else {
    return <h3>Hello {username}</h3>;
  }
}

export default UserProfile;
