const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8000;
const RestaurantModel = require("./models/Restaurants");
const UserModel = require("./models/Users");
const OrderModel = require("./models/Orders");
const MenuModel = require("./models/Menu");

require("dotenv").config();
const { MONGO_URL } = process.env;

if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

const app = express();

app.use(cors());
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
    let restaruant = await RestaurantModel.find({ _id: id });
    if (!restaruant) {
      return res.status(501).json("Restaruant not exist");
    }
    return res.status(200).json(restaruant);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});
app.get("/users", async (req, res) => {
  try {
    let users = await UserModel.find({});
    if (!users) {
      return res.status(501).json("Users not exist");
    }
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});
app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let user = await UserModel.find({ _id: id });
    if (!user) {
      return res.status(501).json("User not exist");
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});
app.get("/menus/:restaurantId", async (req, res) => {
  const id = req.params.restaurantId;
  try {
    let restaurant = await RestaurantModel.findById(id).populate("menu");
    if (!restaurant) {
      return res.status(501).json("Restaurant not exist");
    }
    if (!restaurant.menu) {
      return res.status(501).json("Restaurants menu is empty");
    }
    if (!restaurant.menu.length === 0) {
      return res.status(501).json("Restaurants menu is empty");
    }
    const menus = await Promise.all(
      restaurant.menu.map((element) => MenuModel.findById(element))
    );
    return res.status(200).json(menus);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});
app.post("/orders", async (req, res) => {
  try {
    const { order_number, restaurant, items, address, total_price, tip } =
      req.body;

    const newOrder = new OrderModel({
      order_number,
      restaurant,
      items,
      address,
      total_price,
      tip,
    });

    await newOrder.save();

    return res.status(201).json(newOrder);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

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
