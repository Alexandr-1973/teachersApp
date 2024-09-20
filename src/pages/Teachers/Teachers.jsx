import axios from "axios";
// import { useEffect } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import {
  getDatabase,
  ref,
  child,
  get,
  query,
  startAt,
  endAt,
  limitToLast,
  limitToFirst,
  orderByKey,
} from "firebase/database";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import { useEffect, useState } from "react";
import css from "./Teachers.module.css";

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

  const db = getDatabase();

  const [teachers, setTeachers] = useState();

  useEffect(() => {
    async function getData() {
      get(query(ref(db, `/`), orderByKey(), startAt(`${5}`), limitToFirst(4)))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setTeachers(Object.values(Object.values(snapshot.val())));
            // a = Object.values(Object.values(snapshot.val()));
            // console.log(a); // Теперь "a" содержит результат
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      // try {
      //   const snapshot = await get(query(ref(db, `/`), orderByKey(), startAt(`${5}`), limitToFirst(4)));

      //   if (snapshot.exists()) {
      //     setArray( Object.values(Object.values(snapshot.val())));
      //     // console.log(a); // "a" содержит результат
      //     // return a; // Можно также вернуть результат из функции
      //   } else {
      //     console.log("No data available");
      //   }
      // } catch (error) {
      //   console.error(error);
      // }
    }

    getData();
  }, [db]);

  console.log(teachers);

  return (
    <ul className={css.teachersUl}>
      {teachers &&
        teachers.map((teacher) => {
          return (
            <li key={teachers.indexOf(teacher)} className={css.teachersLi}>
              <TeacherCard teacher={teacher} />
            </li>
          );
        })}
    </ul>
  );
};

export default Teachers;
