import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from './pages/home/Home';
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);

   useEffect(() => {
    getCountry("https://restcountries.com/v3.1/all")
  }, [])

  const getCountry = async(url) => {
    await axios.get(url).
  then(data => {
    const countryNames = data.map(country => country.name.common);
    console.log(countryNames);
  })
  }

  const values = {}
  return (
    <MyContext.Provider value={values}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;

export {MyContext};
