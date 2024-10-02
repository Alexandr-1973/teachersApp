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

const favoritePersistConfig = {
  key: "favorite",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
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
