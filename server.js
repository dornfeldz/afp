const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000;
const restaruantData = require("./restaruant_dummy_data.json");
const produtctDatat = require("./item_dummy_data.json");
//Setting up the database
mongoose.connect("mongodb://localhost:27017/restaurant");
// Adding schemas start ----------------------------------
const restaurantSchema = new mongoose.Schema({
  name: String,
  bio: String,
  profilePicture: String,
  cover: String,
  address: String,
  telephone: [Number],
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  adress: {
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    }
},
location: {
  type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
  },
  coordinates: {
      type: [Number],
      required: true
  } 

 },

  menu: [],
});

const menuSchema = new mongoose.Schema({

  restaurant: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Restaurant"
  },

  menu: {
      type: String,
      required: true
  } ,
  price: {
      type: Number,
      required: true
  }
})

//Adding the schemas end ----------------------------------

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
});

const main = async () => {

   try{
    //Connect MongoDB
    await mongoose.connect("mongodb://localhost:27017/restaurant", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    //Start server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
   } catch (err) {
    console.error(err);
    process.exit(1);
  };
  
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  })};
