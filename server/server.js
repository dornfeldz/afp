const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000;
const RestaurantModel = require("./models/Restaurants");


require("dotenv").config();
const { MONGO_URL } = process.env;

if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

const app = express();

app.use(express.json());

app.get("/restaurants", async (req, res) => {
  try {
    let restaruants = await RestaurantModel.find({});
    if (!restaruants) {
      return res.status(501).json("Restaruants not exist");
    } 
    return res.status(200).json(restaruants);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});
app.get("/restaurant/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let restaruant = await RestaurantModel.find({_id: id });
    if (!restaruant) {
      return res.status(501).json("Restaruant not exist");
    } 
    return res.status(200).json(restaruant);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});
/*app.get("/restaurant/:id", async (req, res) => {
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
app.post("/restaurant", async (req, res) => {
  let restaurant = req.body;
  try {
    console.log("restaruant posted")
    console.log(restaurant)
    let saved = {}
    saved.id = 99
    return res.status(201).json(saved.id);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err.message);
  }
});
app.post("/product", async (req, res) => {
  let product = req.body;
  try {
    console.log("product posted")
    console.log(product)
    let saved = {}
    saved.id = 99
    return res.status(201).json(saved.id);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err.message);
  }
});*/

const main = async () => {
  await mongoose.connect(MONGO_URL);

  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
