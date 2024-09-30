import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { teachersReducer } from "../redux/teachers/teachersSlice";
import { favoriteReducer } from "../redux/favorite/favoriteSlice";
import { filtersReducer } from "../redux/filters/filtersSlice";
import { authReducer } from "./auth/authSlice";

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const favoritePersistConfig = {
  key: "favorite",
  storage,
  whitelist: ["items"], // Если есть определенные поля для сохранения
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    teachers: teachersReducer,
    filters: filtersReducer,
    favorite: persistReducer(favoritePersistConfig, favoriteReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: import.meta.env.MODE === "development",
});

export const persistor = persistStore(store);
