import { login } from "./firebase.js";

function handleLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  login(email, password);
}
