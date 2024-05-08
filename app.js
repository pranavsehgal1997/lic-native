import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "./firebase";

const db=getDatabase(app);
function App() {
    const signupUser= () => {
        createUserWithEmailAndPassword(
            auth,
            "sushant1219asm@gmail.com",
            "Me@123"
        ).then((value)=> console.log(value));
    };
   
    return (<div className="App">
        <h1>FIrebase React App</h1>
        <button onClick={putData}> Put Data</button>
    </div>);
}
export default App;