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
}) => {
  function closeModal() {
    setIsModal(false);
  }

  return (
    <Modal
      isOpen={isModal}
      // overlayClassName={css.overlay}
      // appElement={document.getElementById("hereIsYourRootElementId")}
      // appElement={document.getElementById('app')}
      // ariaHideApp={false}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      className={css.modal}
      style={{
        overlay: {
          // position: 'fixed',
          // top: 0,
          // left: 0,
          // right: 0,
          // bottom: 0,
          backgroundColor: "rgba(159, 186, 174, 0.2)",
          paddingLeft: 10,
          paddingRight: 10,
        },
      }}
    >
      <IoMdClose className={css.icon} onClick={closeModal} />

      {componentObject !== "trialBtn" && (
        <GenAuthForm componentObject={componentObject} />
      )}

      {componentObject === "trialBtn" && (
        <TrialBookForm teacherPhoto={teacherPhoto} teacherName={teacherName} />
      )}
    </Modal>
  );
};

export default GenModal;
