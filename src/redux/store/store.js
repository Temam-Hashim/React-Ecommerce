import { configureStore } from "@reduxjs/toolkit"
import CountryListReducer from "../reducer/CountryListReducer";



const store = configureStore({
  reducer: {
    country:CountryListReducer,
  },
});

export default store;
