import React from "react";
import { logout } from "../../store/AuthSlice";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";

function LogoutBtn(width = "100px") {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => [dispatch(logout())]);
  };
  return (
    <button width={width} onClick={logoutHandler}>
      Logout
    </button>
  );
}

export default LogoutBtn;
