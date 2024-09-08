import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import css from "./GenForm.module.css";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useState } from "react";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const schemaRegistration = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email("must be a valid email").required(),
    password: yup
      .string()
      .min(3, "must be at least 3 characters long")
      .required(),
  })
  .required();

const schemaLogin = yup
  .object({
    // name: yup.string(),
    email: yup.string().email("must be a valid email").required(),
    password: yup
      .string()
      .min(3, "must be at least 3 characters long")
      .required(),
  })
  .required();

const GenForm = ({ componentObject }) => {

  const firebaseConfig = {
    apiKey: "AIzaSyAKfUSwVw_sRB4jv_1UdKFU0AaUvUIzzac",
    authDomain: "teachers-app-bc996.firebaseapp.com",
    databaseURL: "https://teachers-app-bc996-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "teachers-app-bc996",
    storageBucket: "teachers-app-bc996.appspot.com",
    messagingSenderId: "688526414582",
    appId: "1:688526414582:web:59070d328be963fc3792d7"
  };

const app=initializeApp(firebaseConfig);
    const auth = getAuth(app);

  const [type, setType] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      componentObject.h === "Registration" ? schemaRegistration : schemaLogin
    ),
  });
  // const onSubmit = (data) => console.log(data);
  const onSubmit=(data)=>{
    // const app=initializeApp(firebaseConfig);
    // const auth = getAuth(app);
    // const auth = getAuth();

    if (componentObject.h === "Registration") {

    createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode, errorMessage);
    
    // ..
  });
}

if (componentObject.h === "Log In") {

  signInWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    
  });
}

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <h2 className={css.h}>{componentObject.h}</h2>
      <p className={css.p}>{componentObject.p}</p>
      {componentObject.h === "Registration" && (
        <>
          <input
            {...register("name")}
            placeholder="Name"
            type="text"
            className={css.input}
          />
          <p className={css.yupP}>{errors.name?.message}</p>
        </>
      )}
      <input
        {...register("email")}
        placeholder="Email"
        type="email"
        className={css.input}
      />
      <p className={css.yupP}>{errors.email?.message}</p>
      <label className={css.passwordLabel}>
        <input
          {...register("password")}
          placeholder="Password"
          type={type}
          className={css.passwordInput}
        />
        {type === "password" && (
          <LuEyeOff className={css.eye} onClick={() => setType("text")} />
        )}
        {type === "text" && (
          <LuEye className={css.eye} onClick={() => setType("password")} />
        )}
      </label>
      <p className={css.yupPassword}>{errors.password?.message}</p>

      <button type="submit" className={css.btn}>
        {componentObject.button}
      </button>
    </form>
  );
};

export default GenForm;
