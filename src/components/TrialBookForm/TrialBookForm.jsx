import css from "./TrialBookForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    engReason: yup.string().required("Сhoose one, please"),
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required(),
  })
  .required();

const TrialBookForm = ({ teacherPhoto, teacherName, closeModal }) => {
  const radioBtns = [
    "Lesson for kids",
    "Living abroad",
    "Exams and coursework",
    "Culture, travel or hobby",
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    reset();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
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
        <li className={css.radioLi}>
          <input
            {...register("engReason")}
            type="radio"
            id="firstRadio"
            name="engReason"
            className={css.radioInput}
            value="Career and business"
          />
          <label className={css.label} htmlFor="firstRadio">
            Career and business
          </label>
        </li>
        {radioBtns.map((radioBtn, index) => {
          return (
            <li className={css.radioLi} key={index}>
              <input
                {...register("engReason")}
                type="radio"
                id={radioBtns.indexOf(radioBtn)}
                name="engReason"
                className={css.radioInput}
                value={radioBtn}
              />
              <label
                className={css.label}
                htmlFor={radioBtns.indexOf(radioBtn)}
              >
                {radioBtn}
              </label>
            </li>
          );
        })}
      </ul>
      <p className={css.errorRadio}>{errors.engReason?.message}</p>
      <input
        {...register("fullName")}
        placeholder="Full Name"
        className={css.input}
      />
      <p className={css.errorP}>{errors.fullName?.message}</p>
      <input {...register("email")} placeholder="Email" className={css.input} />
      <p className={css.errorP}>{errors.email?.message}</p>
      <input
        {...register("phoneNumber")}
        placeholder="Phone number"
        className={css.input}
      />
      <p className={css.errorLastP}>{errors.phoneNumber?.message}</p>
      <button type="submit" className={css.submitBtn}>
        Book
      </button>
    </form>
  );
};

export default TrialBookForm;
