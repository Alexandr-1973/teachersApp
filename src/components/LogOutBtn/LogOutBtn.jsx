import css from "./LogOutBtn.module.css";
import { setLogOut } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/authOperations";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const LogOutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notify = (message) =>
    toast(message, {
      style: { color: "red" },
      duration: 5000,
    });

  const handleClick = async () => {
    try {
      await logoutUser();
      dispatch(setLogOut(false));
      navigate("/");
    } catch (error) {
      notify(error.message);
    }
  };
  return (
    <>
      <button className={css.logoutBtn} onClick={() => handleClick()}>
        LogOut
        <FiLogOut className={css.logoutIcon} />
      </button>
      <Toaster />
    </>
  );
};

export default LogOutBtn;
