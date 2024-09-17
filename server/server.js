const express = require("express");
const PORT = 8000;
const restaruantData = require("./restaruant_dummy_data.json");
///const { MONGO_URL } = process.env;

/*if (!MONGO_URL) {
    console.error("Missing MONGO_URL environment variable");
    process.exit(1);
  }*/
const app = express();
app.use(express.json());

app.get("/restaruants", async (req, res) => {
  try {
    const restaruants = restaruantData
    if (!restaruants) {
      return res.status(501).json("restarusants not exist");
    } 
    return res.status(200).json(restaruants);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

const main = async () => {
    //await mongoose.connect(MONGO_URL);
  
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  };
  
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
