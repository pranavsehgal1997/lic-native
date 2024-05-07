import { signUp } from "./firebase.js";

const handleSignUp = () => {
  const email = document.getElementById("userID").value;
  const password = document.getElementById("password").value;
  signUp(email, password);
};

export {handleSignUp};
