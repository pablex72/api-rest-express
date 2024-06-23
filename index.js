const express = require("express");
const routerApi = require("./routes");
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

routerApi(app);



// app.get("/categories/:categoryId/products/:productId", (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId,
//   });
// });

// app.get("/users", (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset,
//     });
//   } else {
//     res.send("no hay parametrs");
//   }
// });

app.listen(port, () => {
  console.log("mi port + " + port);
});
