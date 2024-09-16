import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/rajanrajac11");
  return response.json();
};
