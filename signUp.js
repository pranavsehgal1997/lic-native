import { signUp } from "./firebase.js";

let button = document.getElementById("handleSign");

const handleSignUp = (e) => {
  e.preventDefault();
  const email = document.getElementById("userID").value;
  const password = document.getElementById("password").value;

  console.log(email);
  console.log(password);
  signUp(email, password);
};

button.addEventListener("click", handleSignUp);






