import { createSlice } from "@reduxjs/toolkit";
import { getCountryList } from "../action/CountryListAction";

const initialState = {
  countries: [],
  getStatus: null,
  getMessage: null,
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    clearError: (state) => {
      state.getMessage = null;
      state.getStatus = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCountryList.pending, (state) => {
      state.getStatus = "LOADING";
    });
    builder.addCase(getCountryList.fulfilled, (state, action) => {
      state.getStatus = "SUCCESS";
      state.countries = action.payload;
      state.getMessage = null; // Optional: clear any previous messages
        console.log("Success", action.payload);
    });
    builder.addCase(getCountryList.rejected, (state, action) => {
      state.getStatus = "ERROR";
      state.getMessage = action.payload?.message || "Something went wrong!";
      console.log("Failed", action.payload)
    });
  },
});

export const { clearError } = countrySlice.actions;
export default countrySlice.reducer;
