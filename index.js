const express = require("express");
const app = express();
const port = 3001;

const { faker } = require("@faker-js/faker");
// const randomName = faker.name.findName();

app.get("/", (req, res) => {
  res.send("hola mi serverrrr expressssssssss");
});

app.get("/nueva-ruta", (req, res) => {
  res.send("hola soy una nueva ruta");
});

app.get("/products", (req, res) => {
  const products = [];
  for (let index = 0; index < 100; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      img: faker.image.imageUrl(),
    //   name: faker.commerce.productName(),
    //   price: parseInt(faker.commerce.price(), 10),
    //   img: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

app.get("/categories/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "Product 3",
    price: 55,
  });
});

app.get("/users", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send("no hay parametrs");
  }
});

app.listen(port, () => {
  console.log("mi port + " + port);
});
