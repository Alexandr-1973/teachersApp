import css from "./AddCardInfo.module.css";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const AddCardInfo = ({ reviews, experience }) => {
  return (
    <>
      <p className={css.experienceP}>{experience}</p>
      <ul className={css.genUl}>
        {reviews &&
          reviews.map((review) => {
            return (
              <li key={reviews.indexOf(review)}>
                <div className={css.iconDiv}>
                  <FaUser className={css.userIcon} />
                  <div className={css.starDiv}>
                    <p className={css.nameP}>{review.reviewer_name}</p>
                    <p className={css.star}>
                      <FaStar className={css.starIcon} />{" "}
                      {review.reviewer_rating}
                      .0
                    </p>
                  </div>
                </div>
                <p className={css.comment}>{review.comment}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default AddCardInfo;
