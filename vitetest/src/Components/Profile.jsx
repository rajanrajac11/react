import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <>
        <br />
        Please Login to continue
      </>
    );
  else
    return (
      <>
        <br />
        Welcome {user.username} <br />
        Your password is {user.password}
      </>
    );
}

export default Profile;
