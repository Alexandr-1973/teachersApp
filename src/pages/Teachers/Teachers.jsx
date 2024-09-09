import axios from "axios";
// import { useEffect } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getDatabase, ref, child, get, query, startAt, endAt, limitToLast, limitToFirst, orderByKey  } from "firebase/database";
// import { collection, query, orderBy, startAfter, limit, getDocs } from "firebase/firestore";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAKfUSwVw_sRB4jv_1UdKFU0AaUvUIzzac",
//   authDomain: "teachers-app-bc996.firebaseapp.com",
//   databaseURL: "https://teachers-app-bc996-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "teachers-app-bc996",
//   storageBucket: "teachers-app-bc996.appspot.com",
//   messagingSenderId: "688526414582",
//   appId: "1:688526414582:web:59070d328be963fc3792d7"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const Teachers = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyAKfUSwVw_sRB4jv_1UdKFU0AaUvUIzzac",
    authDomain: "teachers-app-bc996.firebaseapp.com",
    databaseURL:
      "https://teachers-app-bc996-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "teachers-app-bc996",
    storageBucket: "teachers-app-bc996.appspot.com",
    messagingSenderId: "688526414582",
    appId: "1:688526414582:web:59070d328be963fc3792d7",
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);

  const dbRef = ref(getDatabase());
  
  const db = getDatabase();
  

  
  get(child(dbRef, `/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });


    get(query(ref(db, `/`), orderByKey(), startAt(`${5}`), endAt(`${8}`)))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  
  //   const b=getDatabase()
  //   console.log(b);

  // useEffect(()=>{

  // const fetch=async ()=>{

  // 	const a= await axios.get("https://teachers-app-bc996-default-rtdb.europe-west1.firebasedatabase.app",
  //     {
  //       apiKey: "AIzaSyAKfUSwVw_sRB4jv_1UdKFU0AaUvUIzzac",
  //   authDomain: "teachers-app-bc996.firebaseapp.com",
  //   databaseURL:
  //     "https://teachers-app-bc996-default-rtdb.europe-west1.firebasedatabase.app",
  //   projectId: "teachers-app-bc996",
  //   storageBucket: "teachers-app-bc996.appspot.com",
  //   messagingSenderId: "688526414582",
  //   appId: "1:688526414582:web:59070d328be963fc3792d7",
  //     }
  //   );
  // 	console.log(a);

  // }

  // fetch()
  // }
  // );
  
  



  return <p>Teachers</p>;
};

export default Teachers;
