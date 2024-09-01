import image from "../../images/block-opt.jpg";
import css from "./HomePages.module.css"

const HomePage = () => {
  // const adr= "../../images/block-opt.jpg";
  return (
    <>
      <div className={css.genDiv} >
        <div className={css.text}>
          <h1 className={css.h}>Unlock your potential with the best <span className={css.span}>language </span> tutors</h1>
          <p className={css.p}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button className={css.btn}>Get started</button>
		  </div>
          <img className={css.img} src={image} alt="Some teacher's photo" />
        
      </div>


      <ul>
<li></li>
<li></li>
<li></li>
<li></li>

	  </ul>
    </>
  );
};

export default HomePage;
