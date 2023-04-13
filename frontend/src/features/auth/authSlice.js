import { createSlince, CreateAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isError: null,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    console.log(user);
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    extraReducers: (builder) => {},
  },
});
export default authSlice.reducer;
