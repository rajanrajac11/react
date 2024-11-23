import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        setProducts(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
        console.log(error);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [search]);
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <h1>API Handling</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Someting went wrong</h1>}
      <h2>No. of products = {products.length}</h2>
    </>
  );
}

export default App;
