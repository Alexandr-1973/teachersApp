import Modal from "react-modal";
import css from "./GenModal.module.css";
import GenAuthForm from "../GenAuthForm/GenAuthForm";
import { IoMdClose } from "react-icons/io";
import TrialBookForm from "../TrialBookForm/TrialBookForm";

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
      onRequestClose={closeModal}
      className={css[classModal]}
      style={{
        overlay: {
          position: "absolute",
          height: `${document.documentElement.scrollHeight + 500}px`,
          backgroundColor: "rgba(159, 186, 174, 0.2)",
          paddingLeft: 10,
          paddingRight: 10,
        },

        content: {
          top: `${window.scrollY}px`,
        },
      }}
    >
      <IoMdClose className={css.icon} onClick={closeModal} />

      {componentObject !== "trialBtn" && (
        <GenAuthForm
          componentObject={componentObject}
          closeModal={closeModal}
        />
      )}

      {componentObject === "trialBtn" && (
        <TrialBookForm
          teacherPhoto={teacherPhoto}
          teacherName={teacherName}
          closeModal={closeModal}
        />
      )}
    </Modal>
  );
};

export default GenModal;
