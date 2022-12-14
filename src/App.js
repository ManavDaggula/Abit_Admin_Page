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
  addDoc(collection(db,"participants"),participantData).then(()=>{console.log("added data"); window.alert("Data added")})
}

function App(props) {
  
  console.log(props.data)

  

//https://abit-admin-attendence.vercel.app/authorize?name=Manav Daggula&phone=8291609665&email=manavdaggula@gmail.com&dept=IT&year=TE&event=TBD
  // return <DetailsTable />
  return (
    <>
    <DetailsTable data={props.data}/>
    <button onClick={(e)=>{
        console.log(e.target)
        e.target.disabled = true
        e.target.textContent = "Added"
        pushData(props.data)
      }}>Verify Participant</button>
    </>
  );
}

export default App;
