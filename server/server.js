const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000;
const RestaurantModel = require("./models/Restaurants");
const UserModel = require("./models/Users")


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
