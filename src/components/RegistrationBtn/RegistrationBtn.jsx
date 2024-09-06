import { useState } from "react";
import GenModal from "../GenModal/GenModal";
import css from "./RegistrationBtn.module.css"


const RegistrationBtn = ()=>{
	const [isModal, setIsModal]=useState(false);


	const componentObject = {
		h: "Registration",
		p: "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.",
	  button:"Sign Up"
	};

	return (
		<>
		<button className={css.registrationButton} onClick={()=>setIsModal(true)}>Registration</button>
		<GenModal isModal={isModal} setIsModal={setIsModal} componentObject={componentObject}/>
		</>
	)
}

export default RegistrationBtn;