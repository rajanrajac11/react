import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <>User = {id}</>;
}

export default User;
