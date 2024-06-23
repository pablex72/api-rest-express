const express = require("express");
const router = express.Router()

const { faker } = require("@faker-js/faker");

router.get("/", (req, res) => {
    const products = [];
    const {size} = req.query
    const limit = size || 10
    for (let index = 0; index < limit; index++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            img: faker.image.imageUrl(),
        });
    }
    res.json(products);
});

router.get('/filter',(req,res)=>{
    res.send('yo soy un filter')
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json({
      id,
      name: "Product 3",
      price: 55,
    });
  });

  module.exports = router