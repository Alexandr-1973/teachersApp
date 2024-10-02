import css from "./Navigation.module.css";
import sprite from "/images/sprite.svg";
import { Link, NavLink } from "react-router-dom";
import LoginBtn from "../LoginBtn/LoginBtn";
import RegistrationBtn from "../RegistrationBtn/RegistrationBtn";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import { selectIsLoggedIn } from "../../redux/auth/authSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { auth } from "../../constants/fireBaseConstants";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../redux/auth/authSlice";

const Navigation = () => {
  const [loading, setLoading] = useState(true);
  const isLogin = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setIsLogin({
            displayName: user.displayName,
            email: user.email,
            accessToken: user.accessToken,
          })
        );
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <nav className={css.nav}>
      <Link className={css.logoDiv} to="/">
        <svg width="28px" height="28px">
          <use href={`${sprite}#icon-ukraine`}></use>
        </svg>
        LearnLingo
      </Link>

      <ul className={css.pages}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teachers"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            Teachers
          </NavLink>
        </li>
        {loading ? (
          <p className={css.emptyP}>Favorite</p>
        ) : (
          isLogin && (
            <li>
              <NavLink
                to="/favorite"
                className={({ isActive }) => (isActive ? css.active : "")}
              >
                Favorite
              </NavLink>
            </li>
          )
        )}
      </ul>
      <ul className={css.login}>
        {!isLogin && !loading && (
          <li>
            <LoginBtn />
          </li>
        )}
        {!isLogin && !loading && (
          <li>
            <RegistrationBtn />
          </li>
        )}

        {isLogin && (
          <li>
            <LogOutBtn />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
