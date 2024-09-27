import image from "../../images/block-opt.jpg";
import css from "./HomePages.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate=useNavigate();
  // const adr= "../../images/block-opt.jpg";
  return (
    <div className={css.pageDiv}>
      {/* <div className={css.decorLeft} /> */}
      <div className={css.genDiv}>
        <div className={css.text}>
          <h1 className={css.h}>
            Unlock your potential with the best{" "}
            <span className={css.spanText}>language </span> tutors
          </h1>
          <p className={css.p}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button className={css.btn} onClick={()=>{navigate("/teachers")}}>Get started</button>
        </div>
        <img className={css.img} src={image} alt="Some teacher's photo" />
      </div>

      <ul className={css.ul}>
        <li className={css.li}>
          32,000 +
          <span className={css.span}>
            <span>Experienced</span>tutors
          </span>
        </li>
        <li className={css.li}>
          300,000 +
          <span className={css.span}>
            <span>5-star tutor</span>reviews
          </span>
        </li>
        <li className={css.li}>
          120 +
          <span className={css.span}>
            <span>Subjects</span>taught
          </span>
        </li>
        <li className={css.li}>
          200 +
          <span className={css.span}>
            <span>Tutor</span>nationalities
          </span>
        </li>
      </ul>
      {/* <div className={css.decorRight} /> */}
    </div>
  );
};

export default HomePage;
