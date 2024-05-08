import { login } from "./firebase.js";

document.getElementById("continue").addEventListener("click", handleLogin);

function handleLogin() {
  const email = document.getElementById("userID").value;
  const password = document.getElementById("password").value;
  let imeiNumber = new URLSearchParams(window.location.search);
  let imei = imeiNumber.get("imei");
  console.log("imei : ",imei);
  login(email, password,imei);
}
