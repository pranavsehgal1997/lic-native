import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCQnHx5tIa-sWQf2ETLU9CyTXjPmzC02xM",
  authDomain: "lic-auth-5ccc7.firebaseapp.com",
  projectId: "lic-auth-5ccc7",
  storageBucket: "lic-auth-5ccc7.appspot.com",
  messagingSenderId: "981737004411",
  appId: "1:981737004411:web:25bbd5153e47cf2fa0f1de",
  measurementId: "G-VM8WHCJ3SZ",
  databaseUrl:"https://lic-auth-5ccc7-default-rtdb.firebaseio.com"
};

 export const app = initializeApp(firebaseConfig);
const auth = getAuth();

const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed up successfully:", user);
    // Redirect or perform any other action after sign up
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing up:", errorMessage);
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User logged in successfully:", user);
    // Redirect or perform any other action after login
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error logging in:", errorMessage);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
    // Redirect or perform any other action after logout
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

export { signUp, login, logout };
