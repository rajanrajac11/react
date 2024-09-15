import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/rajanrajac11").then((response) =>
  //       response.json().then((data) => {
  //         console.log(data);
  //         setData(data);
  //       })
  //     );
  //   }, []);
  return (
    <div className="text-center m-3 bg-gray-500 text-4xl p-3">
      GIthub Followers {data.followers}
      <img src={data.avatar_url} alt="" className="h-24 " />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/rajanrajac11");
  return response.json();
};
