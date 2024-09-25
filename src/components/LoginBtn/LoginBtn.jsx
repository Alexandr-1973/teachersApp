import { useState } from "react";
import sprite from "../../images/symbol-defs.svg";
import css from "./LoginBtn.module.css";
// import Modal from "react-modal";
import GenModal from "../GenModal/GenModal";

const LoginBtn = () => {
  const [isModal, setIsModal] = useState(false);

  // function closeModal() {
  // 	setIsModal(false);
  //   }
  const componentObject = {
    h: "Log In",
    p: "Welcome back! Please enter your credentials to access your account and continue your search for an teacher.",
  button:"Log In"
  };

  return (
    <>
      <button className={css.logButton} onClick={() => setIsModal(true)}>
        <svg width="20px" height="20px">
          <use href={`${sprite}#icon-log-in-01`}></use>
        </svg>
        Log in
      </button>
      <GenModal
        isModal={isModal}
        setIsModal={setIsModal}
        componentObject={componentObject}
        classModal="modalAuth"
      />
      {/* <Modal
        isOpen={isModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={css.modal}
        contentLabel="Example Modal"
      >
        <h2 >Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal> */}
    </>
  );
};

export default LoginBtn;
