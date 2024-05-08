import { signUp } from "./firebase.js";

let button = document.getElementById("handleSign");

const handleSignUp = (e) => {
  e.preventDefault();
  const email = document.getElementById("userID").value;
  const password = document.getElementById("password").value;

  console.log(email);
  console.log(password);
  let imeiNumber = new URLSearchParams(window.location.search);
  let imei = imeiNumber.get("imei");
  console.log("imei : ", imei);
  signUp(email, password, imei);
};

button.addEventListener("click", handleSignUp);






