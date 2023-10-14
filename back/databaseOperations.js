const db = require("./db");

async function isDuplicateUser(username, email) {
  const query =
    "SELECT COUNT(*) as count FROM users WHERE username = ? OR email = ?";
  const result = await db.query(query, [username, email]);
  return result[0].count > 0;
}

async function saveUserToDatabase(username, email, password) {
  const query =
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  await db.query(query, [username, email, password]);
}

module.exports = {
  isDuplicateUser,
  saveUserToDatabase,
};
