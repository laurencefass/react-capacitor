import { configureStore, combineReducers, Reducer } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import CapacitorStorage from "redux-persist-capacitor";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import logger from "redux-logger";

import todoReducer from "./slices/todoSlice";
import cameraReducer from "./slices/cameraSlice";
import userReducer from "./slices/userSlice";

// Combine all reducers into one root reducer
const rootReducer = combineReducers({
  todos: todoReducer,
  camera: cameraReducer,
  user: userReducer,
});

// Configuration object for redux-persist
const persistConfig = {
  key: "root",
  storage: CapacitorStorage,
  stateReconciler: autoMergeLevel1,
};

// Wrap the root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer as Reducer);

// Configure the store with the persisted reducer and middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
