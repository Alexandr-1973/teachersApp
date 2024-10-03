import { ref, get, query, endAt, orderByChild } from "firebase/database";
import { db } from "../../constants/fireBaseConstants";

export const getTeachers = async (price) => {
  const snapshot = await get(
    query(ref(db, `/`), orderByChild("price_per_hour"), endAt(price))
  );

  if (snapshot.exists()) {
    const teachersArray = Object.values(Object.values(snapshot.val()));

    return teachersArray;
  } else {
    return [];
  }
};
