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

import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'; 


const Teachers = () => {
  const [startNumber, setStartNumber] = useState(0);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const [firstSelectValue, setFirstSelectValue] = useState("any");
  const [secondSelectValue, setSecondSelectValue] = useState("any");
  const [thirdSelectValue, setThirdSelectValue] = useState("any");

  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);

  const languagesOptions = [
    "any",
    "French",
    "English",
    "German",
    "Ukrainian",
    "Polish",
  ];
  const levelsOptions = [
    "any",
    "A1 Beginner",
    "A2 Elementary",
    "B1 Intermediate",
    "B2 Upper-Intermediate",
  ];
  const priceOptions = ["any", "10", "20", "30", "40"];

  const toggleOptions=(selectedOption)=>{
if (languagesOptions.includes(selectedOption)){
setFirstSelectValue(selectedOption);
setSecondSelectValue("any");
setThirdSelectValue("any");
}
if (levelsOptions.includes(selectedOption)){
  setFirstSelectValue("any");
  setSecondSelectValue(selectedOption);
  setThirdSelectValue("any");
  }
  if (priceOptions.includes(selectedOption)){
    setFirstSelectValue("any");
    setSecondSelectValue("any");
    setThirdSelectValue(selectedOption);
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#f8f8f8";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  useEffect(() => {
    const getTeachersDb = async () => {
      const teachersArray = await getTeachers(startNumber);
      if (teachersArray.length > 0) {
        dispatch(setTeachers(teachersArray));
        window.scrollTo(0, 0);
      }
      if (teachersArray.length < 4) {
        setIsLoadMore(false);
      }
      console.log(teachersArray);
    };
    getTeachersDb();
  }, [dispatch, startNumber]);

 

  return (
    <div className={css.genDiv}>
      <ul className={css.ul}>
        <li>
          <CustomSelect
            options={languagesOptions}
            title="Languages"
            widthElem="221px"
            selectValue={firstSelectValue}
            toggleOptions={toggleOptions}
          />
        </li>
        <li>
          <CustomSelect
            options={levelsOptions}
            title="Level of knowledge"
            widthElem="250px"
            selectValue={secondSelectValue}
            toggleOptions={toggleOptions}
          />
        </li>
        <li>
          <CustomSelect
            options={priceOptions}
            title="Price"
            widthElem="124px"
            selectValue={thirdSelectValue}
            toggleOptions={toggleOptions}
          />
        </li>
      </ul>

      <TeachersList teachers={teachers} />

      {isLoadMore && (
        <button
          className={css.loadMore}
          onClick={() => {
            setStartNumber(startNumber + 4);
          }}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default Teachers;
