import {
	getDatabase,
	ref,
	child,
	get,
	query,
	startAt,
	endAt,
	limitToLast,
	limitToFirst,
	orderByKey,
	orderByChild,
	equalTo,
  } from "firebase/database";
  import { db } from "../../constants/fireBaseConstants";




export const getTeachers = async (startNumber) => {
	try {
	  const snapshot = await get(query(ref(db, `/`), orderByKey(), startAt(`${startNumber}`), limitToFirst(4)));
	  
	  if (snapshot.exists()) {
		const teachersArray = Object.values(Object.values(snapshot.val()));
		
		return teachersArray;
	  } else {
		console.log("No data available");
		return [];
	  }
	} catch (error) {
	  console.log(error);
	  return [];
	}
  };



//   export const getFilterTeachers = async ({ languages, levels, priceRange, startAtKey = '5', limit = 4 } = {}) => {
// 	try {
// 	  // Базовый запрос
// 	  let teachersQuery = query(ref(db, `/`), orderByKey(), startAt(`${startAtKey}`), limitToFirst(limit));
  
// 	  // Применение фильтра по языкам
// 	  if (languages) {
// 		teachersQuery = query(teachersQuery, orderByChild('languages'), equalTo(languages));
// 	  }
  
// 	  // Применение фильтра по уровням
// 	  if (levels) {
// 		teachersQuery = query(teachersQuery, orderByChild('levels'), equalTo(levels));
// 	  }
  
// 	  // Применение фильтра по цене за час
// 	  if (priceRange && priceRange.min !== undefined && priceRange.max !== undefined) {
// 		teachersQuery = query(teachersQuery, orderByChild('price_per_hour'), startAt(priceRange.min), endAt(priceRange.max));
// 	  }
  
// 	  // Выполнение запроса
// 	  const snapshot = await get(teachersQuery);
	  
// 	  if (snapshot.exists()) {
// 		const teachersArray = Object.values(snapshot.val());
// 		return teachersArray;
// 	  } else {
// 		console.log("No data available");
// 		return [];
// 	  }
// 	} catch (error) {
// 	  console.log(error);
// 	  return [];
// 	}
//   };








