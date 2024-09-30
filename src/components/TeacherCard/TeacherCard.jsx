import { useEffect, useState } from "react";
import css from "./TeacherCard.module.css";
import AddCardInfo from "../AddCardInfo/AddCardInfo";
import TrialBtn from "../TrialBtn/TrialBtn";
import { FiHeart } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { PiLineVertical } from "react-icons/pi";
import { selectFavorite } from "../../redux/favorite/favoriteSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { clickFavorite } from "../../redux/favorite/favoriteSlice.js";
import toast, { Toaster } from 'react-hot-toast';
import { selectIsLoggedIn } from "../../redux/auth/authSlice.js";

const TeacherCard = ({ teacher}) => {
  const notify = () => toast('Please log in!');
  const favoriteTeachers = useSelector(selectFavorite);
  const isLogin = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  const [openAddInfo, setOpenAddInfo] = useState(false);
  const [classIcon, setClassIcon] = useState()
  

  useEffect(()=>{
    if (isLogin &&
      favoriteTeachers.length>0 &&
      favoriteTeachers.some((item) => item.avatar_url === teacher.avatar_url)
    ) {
      
      
      setClassIcon("red");
    } else {
      setClassIcon("white");
    };
    setOpenAddInfo(false);
  }, [favoriteTeachers, teacher.avatar_url, isLogin])

  const handleClick = () => {
if (isLogin) {
  classIcon === "white" ? setClassIcon("red") : setClassIcon("white");
    dispatch(clickFavorite(teacher));
}
else {
  notify();
}

    // classIcon === "white" ? setClassIcon("red") : setClassIcon("white");
    // dispatch(clickFavorite(teacher));
  };

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
            <PiLineVertical className={css.vertIcon} />

            <p className={css.highP}>Lessons done: {teacher.lessons_done}</p>
            <PiLineVertical className={css.vertIcon} />

            <p className={css.highPIcon}>
              <FaStar className={css.starIcon} />
              Rating: {teacher.rating}
            </p>
            <PiLineVertical className={css.vertIcon} />

            <p className={css.highP}>
              Price / 1 hour:{" "}
              <span className={css.greenSpan}> {teacher.price_per_hour}$</span>
            </p>
          </div>
          <FiHeart className={css[classIcon]} onClick={() => handleClick()} />
          <Toaster />
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
          />
        )}
      </div>
    </div>
  );
};

export default TeacherCard;
