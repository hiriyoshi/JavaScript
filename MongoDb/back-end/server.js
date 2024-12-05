// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// const PORT = 5000;

// //Middleware
// app.use(cors());
// app.use(express.json()); //parse JSON json request bodies
// app.use(express.urlencoded({ extended: true })); //Parse rge URL-encoded request bodies

// //MongoDB Atlas Connection
// mongoose
//   .connect(
//     "mongodb+srv://iloveudawpo:admin@cluster0.k8uwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Failed to connect to MongoDB:", err));

// //schema and model
// const ItemSchema = new mongoose.Schema({ name: String, quantity: Number });
// const Item = mongoose.model("Item", ItemSchema);

// //Routes
// app.get("/items", async (req, res) => {
//   const item = await Item.find();
// });

// app.post("/items", async (req, res) => {
//   const item = new Item(req.body);
//   await item.save();
//   res.json(item);
// });

// app.listen(PORT, () =>
//   console.log(`Server running on http://localhost:${PORT}`)
// );

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const POST = 5321;

//Middleware
app.use(cors());
app.use(express.json());

//MongoDB Atlas Connection
mongoose
  .connect(
    "mongodb+srv://iloveudawpo:admin@cluster0.k8uwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

//User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, required: true },
});

// Routes
// Register
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error registering user", error: err.message });
  }
});

// Routes
// Register
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error registering user", error: err.message });
  }
});
