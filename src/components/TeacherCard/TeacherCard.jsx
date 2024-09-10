import { useState } from "react";
import css from "./TeacherCars.module.css";
import AddCardInfo from "../AddCardInfo/AddCardInfo";
import TrialBtn from "../TrialBtn/TrialBtn";

const TeacherCard = ({ teacher }) => {
  const [openAddInfo, setOpenAddInfo] = useState(false);

  console.log(teacher);

  return (
    <div className={css.genDiv}>
      <img src={teacher.avatar_url} alt="" />
      <div className={css.textDiv}>
        <div className={css.languages}>
          <span>Languages</span>
          <ul className={css.hUl}>
            <li>Lessons online</li>
            <li>Lessons done: {teacher.lessons_done}</li>
            <li>Rating: {teacher.rating}</li>
            <li>Price / 1 hour: {teacher.price_per_hour}$</li>
          </ul>
        </div>

        <h2>
          {teacher.name} {teacher.surname}
        </h2>
        <ul>
          <li className={css.languageLi}>
            <span>Speaks:</span>
            <ul className={css.language}>
              {teacher.languages &&
                teacher.languages.map((language) => {
                  return (
                    <li key={language.indexOf(teacher.languages)}>
                      {language}
                    </li>
                  );
                })}
            </ul>
          </li>
          <li>
            <span>Lesson Info:</span>
            {teacher.lesson_info}
          </li>
          <li className={css.languageLi}>
            <span>Conditions</span>
            <ul className={css.language}>
              {teacher.conditions &&
                teacher.conditions.map((condition) => {
                  return (
                    <li key={teacher.conditions.indexOf(condition)}>
                      {condition}
                    </li>
                  );
                })}
            </ul>
          </li>
        </ul>
        {!openAddInfo && (
          <p
            onClick={() => {
              setOpenAddInfo(true);
            }}
          >
            Read more
          </p>
        )}

        {openAddInfo && <AddCardInfo reviews={teacher.reviews} />}

        <ul className={css.levelsUl}>
          {teacher.levels &&
            teacher.levels.map((level) => {
              return <li key={teacher.levels.indexOf(level)}>{level}</li>;
            })}
        </ul>
        {openAddInfo && <TrialBtn />}
      </div>
    </div>
  );
};

export default TeacherCard;
