const express = require("express");
const db = require("./db");
const app = express();
const port = process.env.PORT || 8080;

// Middleware to parse JSON requests
app.use(express.json());

// Define user-related routes in a separate module
const userRoutes = require("./userRoutes");
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
