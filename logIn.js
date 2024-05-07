import { login } from "./firebase.js";

document.getElementById("continue").addEventListener("click", handleLogin);

function handleLogin() {
  const email = document.getElementById("userID").value;
  const password = document.getElementById("password").value;
  login(email, password);
}