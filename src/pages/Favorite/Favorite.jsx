import { useSelector } from "react-redux";
import TeachersList from "../../components/TeachersList/TeachersList"
import { selectFavorite } from "../../redux/favorite/favoriteSlice";
import { useEffect } from "react";


const Favorite = ()=>{

	const favoriteTeachers = useSelector(selectFavorite);
	useEffect(() => {
		document.body.style.backgroundColor = "#f8f8f8";
	
		return () => {
		  document.body.style.backgroundColor = "";
		};
	  }, []);

	return (
		<TeachersList teachers={favoriteTeachers}/>
	)
}

export default Favorite;