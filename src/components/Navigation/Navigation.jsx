import css from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <p>LearnLingo</p>
      <ul className={css.pages}>
        <li >Home</li>
        <li>Teachers</li>
      </ul>
      <ul className={css.log}>
        <li>Log in</li>
        <li>Registration</li>
      </ul>
    </nav>
  );
};

export default Navigation;
