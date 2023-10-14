const express = require("express");
const router = express.Router();

// Import your custom modules for user validation, database operations, and password hashing
const { validateUserRegistration } = require("./userValidation");
const { isDuplicateUser, saveUserToDatabase } = require("./databaseOperations");
const { hashPassword } = require("./passwordUtils");

router.get("/", async (req, res) => {
  try {
    const query = "SELECT * FROM users";
    const results = await db.query(query);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching users");
  }
});

// Define a route for user registration
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate user input
    const validationErrors = validateUserRegistration(
      username,
      email,
      password
    );
    if (validationErrors.length > 0) {
      return res.status(400).json({ errors: validationErrors });
    }

    // Check for duplicate email or username
    const isDuplicate = await isDuplicateUser(username, email);
    if (isDuplicate) {
      return res
        .status(409)
        .json({ error: "Username or email already in use" });
    }

    // Hash and salt the user's password
    const hashedPassword = await hashPassword(password);

    // Save user data to your database
    await saveUserToDatabase(username, email, hashedPassword);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
});

module.exports = router;
