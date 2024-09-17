const express = require("express");
const PORT = 8000;
const restaruantData = require("./restaruant_dummy_data.json");
const produtctDatat = require("./item_dummy_data.json");

const app = express();
app.use(express.json());

app.get("/restaurants", async (req, res) => {
  try {
    const restaurants = restaruantData
    if (!restaurants) {
      return res.status(501).json("restaurants not exist");
    } 
    return res.status(200).json(restaurants);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});
app.get("/restaurant/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const restaurants = restaruantData
    const restaurant = restaurants.find(e => e.id == id);

    if (restaurant) {
      return res.status(200).json(restaurant);
    } else {
      return res.status(404).json("Restaurant not found");
    }

  } catch (err) {
    return res.status(500).json(err.message);
  }
});
app.get("/product/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const products = produtctDatat
    const product = products.find(e => e.id == id);

    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json("Product not found");
    }

  } catch (err) {
    return res.status(500).json(err.message);
  }
});

const main = async () => {

    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  };
  
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
