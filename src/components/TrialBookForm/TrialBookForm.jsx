import css from "./TrialBookForm.module.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

const TrialBookForm = ({ teacherPhoto, teacherName }) => {
  const radioBtns = [
    "Career and business",
    "Lesson for kids",
    "Living abroad",
    "Exams and coursework",
    "Culture, travel or hobby",
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.title}>Book trial lesson</h2>
      <p className={css.description}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className={css.imgDiv}>
        <img src={teacherPhoto} alt="Teacher's photo" className={css.img} />
        <div className={css.teacherDiv}>
          <p className={css.teacherP}>Your teacher</p>
          <p className={css.teacherNameP}>{teacherName}</p>
        </div>
      </div>
      <h3 className={css.engH}>
        What is your main reason for learning English?
      </h3>

      <ul className={css.radioUl}>
        {radioBtns.map((radioBtn) => {
          return (
            <li className={css.radioLi} key={radioBtns.indexOf(radioBtn)}>
              <input
                type="radio"
                id={radioBtns.indexOf(radioBtn)}
                name="engReason"
              />
              <label htmlFor={radioBtns.indexOf(radioBtn)}>{radioBtn}</label>
            </li>
          );
        })}
      </ul>

      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
};

export default TrialBookForm;
