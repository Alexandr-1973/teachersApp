import { useState } from "react";
import GenModal from "../GenModal/GenModal";
import css from "./TrialBtn.module.css";

const TrialBtn = ({ teacherPhoto, teacherName, index }) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <button className={css.trialBtn} onClick={() => setIsModal(true)}>
        Book trial lesson
      </button>
      <GenModal
        isModal={isModal}
        setIsModal={setIsModal}
        componentObject="trialBtn"
        teacherPhoto={teacherPhoto}
        teacherName={teacherName}
        classModal="modalTrialBook"
        index={index}
      />
    </>
  );
};

export default TrialBtn;
