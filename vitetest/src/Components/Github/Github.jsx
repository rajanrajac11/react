import React from "react";
import { useLoaderData } from "react-router-dom";

export const githubInfoProvider = async () => {
  const response = await fetch("https://api.github.com/users/rajanrajac11");
  return response.json();
};

function Github() {
  const data = useLoaderData();
  return (
    <div>
      Github followers = {data.followers}
      <div>
        <img src={data.avatar_url} alt="" />
      </div>
    </div>
  );
}

export default Github;
