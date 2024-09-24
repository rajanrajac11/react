import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <>
      Followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </>
  );
}

export default Github;

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/rajanrajac11");
  return response.json();
};
