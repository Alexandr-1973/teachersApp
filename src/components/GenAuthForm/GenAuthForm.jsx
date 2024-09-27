import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import css from "./GenAuthForm.module.css";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useState } from "react";
import {
  registerUser,
  logInUser,
} from "../../redux/auth/authOperations";
import { setIsLogin } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";

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
    email: yup.string().email("must be a valid email").required(),
    password: yup
      .string()
      .min(3, "must be at least 3 characters long")
      .required(),
  })
  .required();

const GenAuthForm = ({ componentObject }) => {
  const dispatch = useDispatch();

  const [type, setType] = useState("password");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      componentObject.h === "Registration" ? schemaRegistration : schemaLogin
    ),
  });

  const onSubmit = async (data) => {
    if (componentObject.h === "Registration") {
      const user = await registerUser(data.name, data.email, data.password);
      dispatch(
        setIsLogin({
          displayName: user.displayName,
          email: user.email,
          accessToken: user.accessToken,
        })
      );

      console.log(user);
    }

    if (componentObject.h === "Log In") {
      const user = await logInUser(data.email, data.password);
      dispatch(
        setIsLogin({
          displayName: user.displayName,
          email: user.email,
          accessToken: user.accessToken,
        })
      );
      console.log(user);
    }
    reset();
  };

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

export default GenAuthForm;
