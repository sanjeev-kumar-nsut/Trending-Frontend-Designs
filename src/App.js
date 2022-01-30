import "./css/EditorBox.css";
import "./css/Navbar.css";
import "./css/Home.css";
import "./css/Designs.css";
import "./css/wave.css";
import "./css/bootstrap.min.css"
import "./css/Contact.css";
import "./css/footer.css";
import "./css/Editor.css";

import EditorBox from "./components/EditorBox";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Designs from "./components/Designs";
import Contact from "./components/Contact";
import Footer from "./components/footer";

import { useState, useEffect } from "react";
import db from "./firebase-config";
import { collection, onSnapshot ,setDoc,doc} from "firebase/firestore";
function App() {
  const [allcode,setallcode] = useState([]);
  /*console.log(allcode);*/
  useEffect(() => {
    const unsub = onSnapshot(collection(db,"allcode"),(snapshot) => {
      setallcode(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    });
    return unsub
  },[]);
 
  const handleEdit = async(id,title,htmlCode,cssCode,jsCode) => {
    console.log("changing value : ",htmlCode)
    
    const docRef = doc(db,"allcode",id);
    const payload = {id:id,title:title,htmlCode:htmlCode,cssCode:cssCode,jsCode:jsCode};
    setDoc(docRef,payload);
  };
  return (
  
    <div>
      <Navbar />
      <Home/>
      <Designs allcode = {allcode} handleEdit = {handleEdit} />
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
