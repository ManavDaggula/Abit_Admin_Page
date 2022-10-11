// import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, addDoc, collection } from "firebase/firestore";

import {app} from "./FirebaseAuthentication"
import DetailsTable from "./DetailsTable";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

async function pushData(data){
  const participantData = {
    name: data.name,
    phone: data.phone,
    email: data.email,
    year: data.year,
    dept: data.dept,
    event: data.event
  };
  // let id = db.collection("tasks").doc().getId()
  // console.log(id)
  // Add a new document in collection "cities"
  // await setDoc(doc(db, "tasks", "1234"), participantData);
  addDoc(collection(db,"participants"),participantData).then(()=>{console.log("added data")})
}

function App(props) {
  
  console.log(props.data)

  

//https://abit-admin-attendence.vercel.app/authorize?name=Omkar Pednekar&phone=0816959319&email=assassinlmao21@gmail.com&dept=ads&year=FE&event=asdasd
  // return <DetailsTable />
  return (
    <>
    <DetailsTable data={props.data}/>
    <button onClick={()=>pushData(props.data)}>Verify Participant</button>
    </>
  );
}

export default App;
