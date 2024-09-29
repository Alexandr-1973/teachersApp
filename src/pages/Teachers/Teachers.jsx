import axios from "axios";

import TeacherCard from "../../components/TeacherCard/TeacherCard";
import { useEffect, useState } from "react";
import css from "./Teachers.module.css";
import { getTeachers } from "../../redux/teachers/teachersOperations";
import {
  setTeachers,
  selectTeachers,
} from "../../redux/teachers/teachersSlice";
import { useDispatch, useSelector } from "react-redux";

const Teachers = () => {

  const [startNumber, setStartNumber]=useState(0)
  const [isLoadMore, setIsLoadMore] = useState(true)
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);

  useEffect(() => {
    const getTeachersDb = async () => {
      const teachersArray = await getTeachers(startNumber);
      if (teachersArray.length>0){
      dispatch(setTeachers(teachersArray));
      }
      if (teachersArray.length<4){
        setIsLoadMore(false);
      };
      console.log(teachersArray);
    };
    getTeachersDb();
  }, [dispatch, startNumber]);

  console.log(teachers.length);
  

  return (
    <div className={css.genDiv}>
      <ul className={css.teachersUl}>
        {teachers &&
          teachers.map((teacher, index) => {
            return (
              <li key={index} className={css.teachersLi}>
                <TeacherCard teacher={teacher} index={index} />
              </li>
            );
          })}
      </ul>
      {isLoadMore && <button className={css.loadMore} onClick={()=>{setStartNumber(startNumber+4)}}>Load more</button>}
    </div>
  );
};

export default Teachers;
