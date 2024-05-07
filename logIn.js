
import { login } from "./firebase";

const handleLogin = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  login(email, password);
};
export {handleLogin};