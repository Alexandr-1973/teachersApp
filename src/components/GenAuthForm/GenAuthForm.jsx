import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import css from "./GenAuthForm.module.css";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useState } from "react";
import { registerUser, logInUser } from "../../redux/auth/authOperations";
import { setIsLogin } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const schemaRegistration = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email("must be a valid email").required(),
    password: yup
      .string()
      .min(6, "must be at least 6 characters long")
      .required(),
  })
  .required();

const schemaLogin = yup
  .object({
    email: yup.string().email("must be a valid email").required(),
    password: yup
      .string()
      .min(6, "must be at least 6 characters long")
      .required(),
  })
  .required();

const GenAuthForm = ({ componentObject, closeModal }) => {
  const notify = (message) =>
    toast(message, {
      style: { color: "red" },
      duration: 5000,
    });

  const navigate = useNavigate();

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
      const res = await registerUser(data.name, data.email, data.password);

      if (typeof res === "string") {
        if (res === "Firebase: Error (auth/email-already-in-use).") {
          notify("Your email already in used. Please click Log in button.");
        } else {
          notify(res);
        }
        setTimeout(() => {
          closeModal();
        }, "5000");
        return;
      }

      dispatch(
        setIsLogin({
          displayName: res.displayName,
          email: res.email,
          accessToken: res.accessToken,
        })
      );
    }

    if (componentObject.h === "Log In") {
      const res = await logInUser(data.email, data.password);

      if (typeof res === "string") {
        if (res === "Firebase: Error (auth/invalid-credential).") {
          notify("Sorry, invalid credential.");
        } else {
          notify(res);
        }
        setTimeout(() => {
          closeModal();
        }, "5000");

        return;
      }

      dispatch(
        setIsLogin({
          displayName: res.displayName,
          email: res.email,
          accessToken: res.accessToken,
        })
      );
    }
    navigate("/teachers");
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
      <Toaster />
    </form>
  );
};

export default GenAuthForm;
