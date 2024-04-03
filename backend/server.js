const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoute");

dotenv.config();

connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("api is running!");
});

app.use(express.json()); //to accept json data

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is running on port ${PORT}`));
