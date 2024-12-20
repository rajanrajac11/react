import express from "express";
const app = express();

const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server is running at port ${port}`);
});

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Table",
    },
    {
      id: 2,
      name: "Chair",
    },
    {
      id: 3,
      name: "Laptop",
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
});
