import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmYK9SuQk1f1MP11QDhUab5IYWK8HMcoE",
  authDomain: "abit-website.firebaseapp.com",
  projectId: "abit-website",
  storageBucket: "abit-website.appspot.com",
  messagingSenderId: "339626636610",
  appId: "1:339626636610:web:33d39060b0810497e004db",
  measurementId: "G-DXWMMLF15Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// console.log(app)
// const db = getFirestore(app);
// const gatData = async (db)=>{

//   const querySnapshot = await getDocs(collection(db, "tasks"));
//       querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//       console.log(doc.data())
//   });
// }
// gatData(db)