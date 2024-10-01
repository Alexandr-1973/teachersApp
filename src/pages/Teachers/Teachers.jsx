import { useEffect, useState } from "react";
import css from "./Teachers.module.css";
import { getTeachers } from "../../redux/teachers/teachersOperations";
import {
  setTeachers,
  selectTeachers,
} from "../../redux/teachers/teachersSlice";
import { useDispatch, useSelector } from "react-redux";
import TeachersList from "../../components/TeachersList/TeachersList";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import { filtersSelector } from "../../redux/filters/filtersSlice";

const Teachers = () => {
  const [startNumber, setStartNumber] = useState(0);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const filters = useSelector(filtersSelector);

  const languagesOptions = [
    "French",
    "English",
    "German",
    "Ukrainian",
    "Polish",
  ];
  const levelsOptions = [
    "A1 Beginner",
    "A2 Elementary",
    "B1 Intermediate",
    "B2 Upper-Intermediate",
  ];
  const priceOptions = ["10", "20", "30", "40"];

  useEffect(() => {
    document.body.style.backgroundColor = "#f8f8f8";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  useEffect(() => {
    // The request is made with only a Price filter since the firebase Realtime database does
    // not support multiple filters in queries and also does not support the ability
    // to access array values, and the values of languages and levels are contained in arrays.
    // The rest of the filters are taken into account on the front end.

    const getTeachersDb = async () => {
      setIsLoading(true);

      try {
        const teachersArray = await getTeachers(filters.price);
        const filteredArray = teachersArray.filter(
          (item) =>
            item.levels.includes(filters.level) &&
            item.languages.includes(filters.language)
        );

        setStartNumber(0);

        if (filteredArray.length <= 4) {
          setIsLoadMore(false);
        } else {
          setIsLoadMore(true);
        }

        dispatch(setTeachers(filteredArray));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getTeachersDb();
  }, [dispatch, filters]);

  const handleClick = () => {
    setStartNumber(startNumber + 4);
    window.scrollTo(0, 0);
    if (startNumber + 8 >= teachers.length) {
      setIsLoadMore(false);
    }
  };

  return (
    <div className={css.genDiv}>
      <ul className={css.ul}>
        <li>
          <CustomSelect
            options={languagesOptions}
            title="Languages"
            widthElem="221px"
            selectValue={filters.language}
          />
        </li>
        <li>
          <CustomSelect
            options={levelsOptions}
            title="Level of knowledge"
            widthElem="250px"
            selectValue={filters.level}
          />
        </li>
        <li>
          <CustomSelect
            options={priceOptions}
            title="Max price"
            widthElem="124px"
            selectValue={filters.price}
          />
        </li>
      </ul>

      {isLoading ? (
        <p className={css.loading}>Loading...</p>
      ) : (
        <TeachersList teachers={teachers.slice(startNumber, startNumber + 4)} />
      )}
      {!isLoading && teachers.length === 0 && (
        <p className={css.notFoundP}>Not found</p>
      )}

      {isLoadMore && !isLoading && (
        <button
          className={css.loadMore}
          onClick={() => {
            handleClick();
          }}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default Teachers;
