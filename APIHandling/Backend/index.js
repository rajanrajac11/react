import express from "express";
const app = express();

const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server is running of port ${port}`);
});

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Table",
      price: 2000,
    },
    {
      id: 2,
      name: "Chair",
      price: 200,
    },
    {
      id: 3,
      name: "Laptop",
      price: 100000,
    },
    {
      id: 4,
      name: "Mouse",
      price: 500,
    },
  ];

  if (req.query.search) {
    const filteredProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filteredProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
  //   http://localhost:3000/api/products?search=table
});
