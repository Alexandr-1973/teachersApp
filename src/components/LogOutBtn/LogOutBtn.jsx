import css from "./LogOutBtn.module.css";
import { setLogOut } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/authOperations";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";



const LogOutBtn = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handleClick =async()=>{
  await logoutUser();
  dispatch(setLogOut(false));
  navigate("/");


  }
  return (
    <button
      className={css.logoutBtn}
      onClick={()=>handleClick()}
    >
      LogOut
      <FiLogOut className={css.logoutIcon}/>
    </button>
  );
};

export default LogOutBtn;
