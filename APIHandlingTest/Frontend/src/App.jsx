import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios, { isAxiosError, isCancel } from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        setProducts(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error);
        }
        setError(true);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [search]);
  return (
    <>
      <h1>API Handling</h1>
      <input
        type="text"
        name=""
        id=""
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {loading && <h1>Loading</h1>}
      {!loading && <h1>No. of products:{products.length}</h1>}
    </>
  );
}

export default App;
