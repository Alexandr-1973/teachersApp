import { useState } from "react";
import css from "./TeacherCard.module.css";
import AddCardInfo from "../AddCardInfo/AddCardInfo";
import TrialBtn from "../TrialBtn/TrialBtn";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

const TeacherCard = ({ teacher, index }) => {
  const [openAddInfo, setOpenAddInfo] = useState(false);

  console.log(teacher);

  return (
    <div className={css.genDiv}>
      <FaCircle className={css.circle} />
      <img
        src={teacher.avatar_url}
        alt="Teacher's photo"
        className={css.teacherImg}
      />
      <div className={css.textDiv}>
        <div className={css.languagesDiv}>
          <p className={css.languageP}>Languages</p>
          <div className={css.highDiv}>
            <p className={css.highPIcon}>
              <HiOutlineBookOpen className={css.bookIcon} />
              Lessons online
            </p>
            <svg
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0V16" stroke="rgba(18, 20, 23, 0.2)" />
            </svg>
            <p className={css.highP}>Lessons done: {teacher.lessons_done}</p>
            <svg
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0V16" stroke="rgba(18, 20, 23, 0.2)" />
            </svg>
            <p className={css.highPIcon}>
              <FaStar className={css.starIcon} />
              Rating: {teacher.rating}
            </p>
            <svg
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0V16" stroke="rgba(18, 20, 23, 0.2)" />
            </svg>
            <p className={css.highP}>
              Price / 1 hour:{" "}
              <span className={css.greenSpan}> {teacher.price_per_hour}$</span>
            </p>
          </div>
          <IoMdHeartEmpty className={css.heartIcon} />
        </div>

        <h2 className={css.teacherName}>
          {teacher.name} {teacher.surname}
        </h2>

        <ul className={css.speaksUl}>
          <li className={css.languageLi}>
            Speaks:
            <p className={css.languageSpeaksFirstP}>
              {teacher.languages.join(", ")}
            </p>
          </li>

          <li className={css.languageLi}>
            Lesson Info:{" "}
            <p className={css.languageSpeaksP}>{teacher.lesson_info}</p>
          </li>

          <li className={css.languageLi}>
            Conditions:{" "}
            <p className={css.languageSpeaksP}>
              {teacher.conditions.join(" ")}
            </p>
          </li>
        </ul>

        {!openAddInfo && (
          <p
            className={css.readMoreButton}
            onClick={() => {
              setOpenAddInfo(true);
            }}
          >
            Read more
          </p>
        )}

        {openAddInfo && (
          <AddCardInfo
            reviews={teacher.reviews}
            experience={teacher.experience}
          />
        )}

        <ul className={css.levelsUl}>
          {teacher.levels &&
            teacher.levels.map((level) => {
              return (
                <li className={css.levelLi} key={teacher.levels.indexOf(level)}>
                  {level}
                </li>
              );
            })}
        </ul>
        {openAddInfo && (
          <TrialBtn
            teacherPhoto={teacher.avatar_url}
            teacherName={`${teacher.name} ${teacher.surname}`}
            index={index}
          />
        )}
      </div>
    </div>
  );
};

export default TeacherCard;
