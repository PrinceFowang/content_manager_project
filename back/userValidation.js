function validateUserRegistration(username, email, password) {
  const errors = [];

  if (!username || !email || !password) {
    errors.push("Missing username, email, or password");
  }

  // Add more validation rules as needed
  // For example, you can check for email format, password strength, etc.

  if (!isValidEmail(email)) {
    errors.push("Invalid email format");
  }

  if (!isStrongPassword(password)) {
    errors.push(
      "Password should be at least 8 characters long and include letters, numbers, and symbols."
    );
  }

  return errors;
}

function isValidEmail(email) {
  // Implement email format validation
  // You can use regular expressions or other methods
  // Return true if the email is valid, false otherwise
}

function isStrongPassword(password) {
  // Implement password strength validation
  // Return true if the password is strong, false otherwise
}

module.exports = {
  validateUserRegistration,
};
