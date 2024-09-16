import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   fetch("https://api.github.com/users/rajanrajac11")
  //     .then((Response) => Response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  return (
    <div className="bg-green-500 p-3 text-center">
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="" className="h-20 w-20 " />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/rajanrajac11");
  return response.json();
};
