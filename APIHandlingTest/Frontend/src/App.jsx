import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const response = await axios.get("/api/products/");
        setProducts(response.data);
        console.log(products);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <h1>API Handling Test</h1>
      <h3>No. of products = {products.length}</h3>
    </>
  );
}

export default App;
