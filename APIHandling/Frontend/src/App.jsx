import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  // const { products, error, loading } = customReactQuery("/api/products");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
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
          console.log("Request Cancelled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
        console.log(error);
      }
    })();

    //cleanupcode
    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <>
      <h1>API handling</h1>
      <input
        type="text"
        name=""
        placeholder="Search"
        id=""
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Someting went wrong</h1>}
      <h2>Total no. of products : {products.length}</h2>
    </>
  );
}

export default App;

const customReactQuery = (urlPath) => {
  return {
    products,
    error,
    loading,
  };
};
