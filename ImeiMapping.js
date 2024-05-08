import { getDatabase, ref, set, child, get } from "firebase/database";
import firebaseConfig from "./firebase";

const db = getDatabase();

// Function to save IMEI number with email during sign up
const saveIMEIWithEmail = (imei, email) => {
    set(ref(db, `imeiMappings/${imei}`), email)
        .then(() => {
            console.log("IMEI number saved for email:", email);
        })
        .catch((error) => {
            console.error("Error saving IMEI number:", error);
        });
};

// Function to check if an IMEI number exists and retrieve the associated email
const checkIMEIExistence = async (imei) => {
    try {
        const snapshot = await get(child(ref(db), `imeiMappings/${imei}`));
        if (snapshot.exists()) {
            const email = snapshot.val();
            console.log("Email address found for IMEI:", email);
            return email;
        } else {
            console.log("IMEI number does not exist:", imei);
            return null;
        }
    } catch (error) {
        console.error("Error checking IMEI existence:", error);
        return null;
    }
};

export { saveIMEIWithEmail, checkIMEIExistence };