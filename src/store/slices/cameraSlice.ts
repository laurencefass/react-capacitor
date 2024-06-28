import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Photo } from "@capacitor/camera";

interface CameraState {
  photos: Photo[];
}

const initialState: CameraState = {
  photos: [],
};

const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    addPhoto: (state, action: PayloadAction<Photo>) => {
      state.photos.push(action.payload);
    },
  },
});

export const { addPhoto } = cameraSlice.actions;
export default cameraSlice.reducer;
