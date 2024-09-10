const AddCardInfo = ({ reviews }) => {
  return (
    <ul>
      {reviews &&
        reviews.map((review) => {
          return (
            <li key={reviews.indexOf(review)}>
              <div>
                <img src="" alt="" />
                <div>
                  <p>{review.reviewer_name}</p>
                  <p>+ {review.reviewer_rating}.0</p>
                </div>
              </div>
              <p>{review.comment}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default AddCardInfo;
