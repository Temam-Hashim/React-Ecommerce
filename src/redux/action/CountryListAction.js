import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://restcountries.com/v3.1/all";

// get countries action
export const getCountryList = createAsyncThunk(
  "countryList/get",
  async (_, { rejectWithValue }) => {
    // Note the change here
    try {
      const response = await axios.get(API);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: "An unexpected error occurred" });
      }
    }
  }
);
