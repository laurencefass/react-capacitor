import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import todoReducer from "./slices/todoSlice";
import cameraReducer from "./slices/cameraSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    camera: cameraReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
