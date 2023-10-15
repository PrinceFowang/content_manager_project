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
  // Regular expression for a basic email format
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  // Check if the email matches the regular expression
  return emailRegex.test(email);
}

function isStrongPassword(password) {
  // Password must be at least 8 characters long
  if (password.length < 8) {
    return false;
  }

  // Password must contain at least one letter, one number, and one special character
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

  return hasLetter && hasNumber && hasSpecialChar;
}

module.exports = {
  validateUserRegistration,
};
