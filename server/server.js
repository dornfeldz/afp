const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8000;
const RestaurantModel = require("./models/Restaurants");
const UserModel = require("./models/Users");
const OrderModel = require("./models/Orders");
const MenuModel = require("./models/Menu");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

require("dotenv").config();

/*const { MONGO_URL } = process.env;

if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}*/

const { MONGO_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
// Auth begin *******************************************************************************************
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
    userId: user.id,
    email: user.email,
  };

  const secretKey = process.env.SESSION_SECRET;

  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, secretKey, options);
};

if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

const app = express();
app.use(cors());

//Session beállítása

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

//Passport beállítása

app.use(passport.initialize());
app.use(passport.session());

//Passport szerializálása

passport.serializeUser((user, done) => {
  console.log("Serializing user:", user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

//Google OAuth Strategy beállítása

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      try {
        // Ell. hogy létezik e a felhasználó
        let user = await UserModel.findOne({ googleId: profile.id });
        if (!user) {
          // Ha nem létezik, új felhasználót hoz létre
          user = await UserModel.create({
            googleId: profile.id,
            first_name: profile.name.givenName,
            last_name: profile.name.familyName,
            email: profile.emails[0].value,
            picture: profile.photos[0].value,
          });
        }
        console.log("User:", user);
        done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//Auth Routes

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/login",
  }),
  (req, res) => {
    const token = generateToken(req.user);
    res.redirect(`http://localhost:5173?token=${token}`);
  }
);

// Auth ellenörző middleware

const isAuth = (req, res, next) => {
  // if (req.isAuthenticated()) {
  //   return next();
  // }
  // return res.status(401).json({ error: "Ön nincs bejeletkezve!" });
  return next();
};

// Kijelentkezés route

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("http://localhost:5173/login");
  });
});

// Jelenlegi felhasználó lekérése

app.get("/auth/current-user", isAuth, (req, res) => {
  console.log(req.user);
  res.json(req.user);
});

//Auth end *******************************************************************************************

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
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
