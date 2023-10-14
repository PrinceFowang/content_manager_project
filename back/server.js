const express = require("express");
const db = require("./db");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/users", (req, res) => {
  const query = "SELECT * FROM users";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching users");
      return;
    }
    res.json(results);
  });
});

app.use(express.json());

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  const query =
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(query, [username, email, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error registering user");
      return;
    }
    res.status(201).json({ message: "User registered successfully" });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
