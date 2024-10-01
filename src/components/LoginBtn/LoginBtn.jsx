import { useState } from "react";
import css from "./LoginBtn.module.css";
import GenModal from "../GenModal/GenModal";
import { FiLogIn } from "react-icons/fi";

const LoginBtn = () => {
  const [isModal, setIsModal] = useState(false);

  const componentObject = {
    h: "Log In",
    p: "Welcome back! Please enter your credentials to access your account and continue your search for an teacher.",
    button: "Log In",
  };

  return (
    <>
      <button className={css.logButton} onClick={() => setIsModal(true)}>
        <FiLogIn className={css.loginIcon} />
        Log in
      </button>
      <GenModal
        isModal={isModal}
        setIsModal={setIsModal}
        componentObject={componentObject}
        classModal="modalAuth"
      />
    </>
  );
};

export default LoginBtn;
