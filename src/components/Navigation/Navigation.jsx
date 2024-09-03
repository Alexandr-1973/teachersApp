import css from "./Navigation.module.css";
import sprite from "../../images/symbol-defs.svg"
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      {/* <div className={css.logoDiv}> */}
        <Link className={css.logoDiv} to="/">
       <svg width="28px" height="28px">
        <use href={`${sprite}#icon-ukraine`}></use>
       </svg>
        {/* <p className={css.logo}>LearnLingo</p> */}
        LearnLingo
        </Link>
      {/* </div> */}
      <ul className={css.pages}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/teachers">Teachers</NavLink></li>
      </ul>
      <ul className={css.login}>
        <li><button className={css.logButton}><svg width="20px" height="20px"><use href={`${sprite}#icon-log-in-01`}></use></svg>Log in</button></li>
        <li><button className={css.registrationButton}>Registration</button></li>
      </ul>
    </nav>
  );
};

export default Navigation;
