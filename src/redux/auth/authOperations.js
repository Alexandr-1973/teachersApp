import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAKfUSwVw_sRB4jv_1UdKFU0AaUvUIzzac",
//   authDomain: "teachers-app-bc996.firebaseapp.com",
//   databaseURL:
//     "https://teachers-app-bc996-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "teachers-app-bc996",
//   storageBucket: "teachers-app-bc996.appspot.com",
//   messagingSenderId: "688526414582",
//   appId: "1:688526414582:web:59070d328be963fc3792d7",
// };


const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const registerUser = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: name, // Здесь указываем имя пользователя
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const logInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.log(error);
  }
};

 export const logoutUser = async () => {
	try {
	  await signOut(auth);
	  console.log('Пользователь успешно вышел из системы');
	  // Можно сделать редирект или обновить состояние приложения
	} catch (error) {
	 console.log(error);
	 
	}
  };

export const refreshUser = () => {};
