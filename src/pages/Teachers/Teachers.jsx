// import axios from "axios";

import TeacherCard from "../../components/TeacherCard/TeacherCard";
import { useEffect, useState } from "react";
import css from "./Teachers.module.css";
import { getTeachers } from "../../redux/teachers/teachersOperations";
import {
  setTeachers,
  selectTeachers,
} from "../../redux/teachers/teachersSlice";
import { useDispatch, useSelector } from "react-redux";
import TeachersList from "../../components/TeachersList/TeachersList"


const Teachers = () => {

  const [startNumber, setStartNumber]=useState(0)
  const [isLoadMore, setIsLoadMore] = useState(true)
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);

  useEffect(() => {
    document.body.style.backgroundColor = "#f8f8f8";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  useEffect(() => {
    
    const getTeachersDb = async () => {
      const teachersArray = await getTeachers(startNumber);
      if (teachersArray.length>0){
      dispatch(setTeachers(teachersArray));
      window.scrollTo(0, 0);

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
    <TeachersList teachers={teachers} />
   
    {isLoadMore && <button className={css.loadMore} onClick={()=>{setStartNumber(startNumber+4)}}>Load more</button>}
    </div>
  );
};

export default Teachers;
