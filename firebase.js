import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getFirestore, collection, setDoc, doc, addDoc, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyCQnHx5tIa-sWQf2ETLU9CyTXjPmzC02xM",
  authDomain: "lic-auth-5ccc7.firebaseapp.com",
  projectId: "lic-auth-5ccc7",
  storageBucket: "lic-auth-5ccc7.appspot.com",
  messagingSenderId: "981737004411",
  appId: "1:981737004411:web:25bbd5153e47cf2fa0f1de",
  measurementId: "G-VM8WHCJ3SZ",
  databaseUrl: "https://lic-auth-5ccc7-default-rtdb.firebaseio.com",
};


export const app = initializeApp(firebaseConfig);
const auth = getAuth();



window.onload = function () {
  let imeiNumber = new URLSearchParams(window.location.search);
  let imei = imeiNumber.get("imei");
  console.log("called");
  checkIMEIExistence(imei)
}
const db = getDatabase();
const ddb = getFirestore();
const firestore = getFirestore();
const checkIMEIExistence = async (imei) => {

  console.log(imei);
  //const snapshot = await get(child(ref(db), `imeiMappings/${imei}`));
  //const datab = firestore.collection("users").where("imei", "==", imei);
  //console.log(datab)
  const colRef = collection(ddb, 'users');
  const q = query(colRef, where("imei", "==", imei))
  onSnapshot(q, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
      const email = doc.data().email
      document.getElementById("userID").value = email;
    })

  })
  //   if (snapshot.exists()) {
  //     const email = snapshot.val();
  //     console.log("Email address found for IMEI:", email);
  //     document.getElementById("userID").value = email;
  //     return email;
  //   } else {
  //     console.log("IMEI number does not exist:", imei);
  //     // window.location.replace(`http://127.0.0.1:5500/createUser.html?imei=${imei}`)
  //     return null;
  //   }
  // } catch (error) {
  //   console.error("Error checking IMEI existence:", error);
  //   return null;
  // }
};
const signUp = async (email, password, imei) => {
  try {
    console.log(email);
    console.log(password);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User logged in successfully:", user);
    const data = {
      email,
      uid: user.uid,
      imei,
    }
    // console.log(data);
    const docRef = await setDoc(doc(collection(firestore, "users"), user.uid), data);
    console.log("User signed up successfully:", user);
    window.open("./index.html");

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing up:", errorMessage);
  }
};

const login = async (email, password, imei) => {

  // debugger;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    document.getElementById("body").innerHTML = "<h2>You have logged in to the portal</h2>";
    console.log("Document written ");
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
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

export { login, logout, signUp };