<template>
  <form @submit.prevent="registerUser" class="container mt-4">
    <div class="form-group">
      <label for="username">Username:</label>
      <input
        v-model="username"
        type="text"
        id="username"
        name="username"
        class="form-control"
        required
      />
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input
        v-model="email"
        type="email"
        id="email"
        name="email"
        class="form-control"
        required
      />
    </div>

    <div class="form-group">
      <label for="password">Password:</label>
      <input
        v-model="password"
        type="password"
        id="password"
        name="password"
        class="form-control"
        required
      />
    </div>

    <button type="submit" class="btn btn-primary">Register</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    registerUser() {
      // Send a POST request to your server with the registration data
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      // Use a library like axios or the Fetch API to send the request
      axios
        .post("/register", userData)
        .then((response) => {
          // Handle success
          console.log("Registration successful", response.data);
        })
        .catch((error) => {
          // Handle error
          console.error("Registration failed", error.response.data);
        });
      // Handle success and error responses as needed
    },
  },
};
</script>
