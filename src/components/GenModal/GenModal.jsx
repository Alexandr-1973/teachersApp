import Modal from "react-modal";
import css from "./GenModal.module.css";
import GenAuthForm from "../GenAuthForm/GenAuthForm";
import { IoMdClose } from "react-icons/io";
import TrialBookForm from "../TrialBookForm/TrialBookForm";
import { selectTeachers } from "../../redux/teachers/teachersSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

Modal.setAppElement("#root");

const GenModal = ({
  isModal,
  setIsModal,
  componentObject,
  teacherPhoto,
  teacherName,
  classModal,
}) => {

 

  function closeModal() {

    setIsModal(false);
  }



  return (
    <Modal
      isOpen={isModal}
      overlayClassName={css.overlay}
      // appElement={document.getElementById("hereIsYourRootElementId")}
      // appElement={document.getElementById('app')}
      // ariaHideApp={false}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      className={css[classModal]}
      // closeTimeoutMS={500}
      style={{
        overlay: {
          position: `${classModal === "modalTrialBook" ? "absolute" : "fixed"}`,
          // width: "100%",
          height: `${document.documentElement.scrollHeight+500}px`,
          
          // transition: 'opacity 0.5s ease-in-out', 
          //   opacity: isModal ? 1 : 0, 
          // `${document.documentElement.scrollHeight}px`,

          // height: `${window.scrollY}px`,

          // top: 0,
          // left: 0,
          // right: 0,
          // bottom: 0,
          backgroundColor: "rgba(159, 186, 174, 0.2)",
          
          // "rgba(248, 248, 248, 0.7)",
          
          // "rgba(159, 186, 174, 0.2)",
          paddingLeft: 10,
          paddingRight: 10,
        },

        content: {
          top: `${window.scrollY}px`,
          // transition: 'opacity 0.5s ease-in-out', 
          //   opacity: isModal ? 1 : 0, 
            // index === useSelector(selectTeachers).length - 1
            //   ? `${window.scrollY}px`
            //   : `${window.scrollY}px`,
        },
      }}
    >
      <IoMdClose className={css.icon} onClick={closeModal} />

      {componentObject !== "trialBtn" && (
        <GenAuthForm componentObject={componentObject} closeModal={closeModal}/>
      )}

      {componentObject === "trialBtn" && (
        <TrialBookForm teacherPhoto={teacherPhoto} teacherName={teacherName} closeModal={closeModal}/>
      )}
    </Modal>
  );
};

export default GenModal;
