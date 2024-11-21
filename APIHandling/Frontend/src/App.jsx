import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        const response = await axios.get("/api/products");
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  if (error) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <>
      <h1>API handling</h1>
      <h2>Total no. of products : {products.length}</h2>
    </>
  );
}

export default App;
