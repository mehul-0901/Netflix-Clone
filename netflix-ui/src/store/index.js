import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  genersLoaded: false,
  generes: [],
};

const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {},
});

export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer,
  },
});
