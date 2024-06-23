const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("hola mi serverrrr expressssssssss");
});

app.get("/nueva-ruta", (req, res) => {
  res.send("hola soy una nueva ruta");
});

app.get("/productos", (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1567,
  });
});

app.listen(port, () => {
  console.log("mi port + " + port);
});
