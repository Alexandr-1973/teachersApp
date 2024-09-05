import { useState } from "react";
import GenModal from "../GenModal/GenModal";
import css from "./RegistrationBtn.module.css"


const RegistrationBtn = ()=>{
	const [isModal, setIsModal]=useState(false);


	return (
		<>
		<button className={css.registrationButton} onClick={()=>setIsModal(true)}>Registration</button>
		<GenModal isModal={isModal} setIsModal={setIsModal} component="RegistrationForm"/>
		</>
	)
}

export default RegistrationBtn;