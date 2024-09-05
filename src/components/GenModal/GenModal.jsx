import Modal from "react-modal";
import css from "./GenModal.module.css"
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const GenModal = ({isModal, setIsModal, component})=>{

	function closeModal() {
		setIsModal(false);
	  }

	return (
		<Modal
        isOpen={isModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={css.modal}
        contentLabel="Example Modal"
      >

{component === "LoginForm" ? <LoginForm/> : <RegistrationForm/>}

        {/* <h2 >Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
      </Modal>
	)
}

export default GenModal;