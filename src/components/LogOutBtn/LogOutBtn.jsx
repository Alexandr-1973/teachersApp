import css from "./LogOutBtn.module.css";
import { setLogOut } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/authOperations";


const LogOutBtn = () => {
  const dispatch = useDispatch();

  const handleClick =async()=>{
  await logoutUser();
  dispatch(setLogOut(false));


  }
  return (
    <button
      className={css.logoutBtn}
      onClick={()=>handleClick()}
    >
      LogOut
    </button>
  );
};

export default LogOutBtn;
