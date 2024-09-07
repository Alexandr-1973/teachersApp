import Modal from "react-modal";
import css from "./GenModal.module.css"
import GenForm from "../GenForm/GenForm";

import { IoMdClose } from "react-icons/io";


Modal.setAppElement('#root');

const GenModal = ({isModal, setIsModal, componentObject})=>{

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
            backgroundColor: 'rgba(159, 186, 174, 0.2)'
          }}}
        // contentLabel="Example Modal"
      >
{/* <button className={css.closeButton}> */}
  <IoMdClose className={css.icon} onClick={closeModal}/>
  {/* </button> */}
<GenForm componentObject={componentObject}/>

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