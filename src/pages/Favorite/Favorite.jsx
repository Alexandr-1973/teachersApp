import { useSelector } from "react-redux";
import TeachersList from "../../components/TeachersList/TeachersList";
import { selectFavorite } from "../../redux/favorite/favoriteSlice";
import { useEffect } from "react";
import css from "./Favorite.module.css";

const Favorite = () => {
  const favoriteTeachers = useSelector(selectFavorite);
  useEffect(() => {
    document.body.style.backgroundColor = "#f8f8f8";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <TeachersList teachers={favoriteTeachers} />
      {favoriteTeachers.length === 0 && (
        <p className={css.notSelectedP}>Favorites are not selected</p>
      )}
    </>
  );
};

export default Favorite;
