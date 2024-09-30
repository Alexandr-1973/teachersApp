import TeacherCard from "../TeacherCard/TeacherCard";
import css from "./TeachersList.module.css";

const Teachers = ({ teachers }) => {
  return (
    <ul className={css.teachersUl}>
      {teachers &&
        teachers.map((teacher, index) => {
          return (
            <li key={index} className={css.teachersLi}>
              <TeacherCard teacher={teacher} />
            </li>
          );
        })}
    </ul>
  );
};

export default Teachers;
