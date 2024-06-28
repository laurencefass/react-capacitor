import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  console.log("fetchUser");
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  const nameParts = data.name.split(" ");
  return {
    firstName: nameParts[0],
    lastName: nameParts.length > 1 ? nameParts[nameParts.length - 1] : "",
    email: data.email,
  } as User;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      console.log("userSlice.updateUser", action.payload);
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch user";
      });
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
