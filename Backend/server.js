import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      content: "This is first joke",
    },
    {
      id: 2,
      title: "Joke 2",
      content: "This is second joke",
    },
    {
      id: 3,
      title: "Joke 3",
      content: "This is third joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
