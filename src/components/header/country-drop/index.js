import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
// import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { IoSearch } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
import { getCountryList } from "../../../redux/action/CountryListAction";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CountryDrop() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("")

  const { countries } = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountryList());
  }, [dispatch]);

    useEffect(() => {
      setCountryList(countries);
    }, [countries]);

   const selectCountry = (id,country) => {
     setSelectedTab(id);
     setSelectedCountry(country)
     setOpen(!open);
   };

   const filterCountry = (e) => {
     const keyword = e.target.value.toLowerCase();
     const filteredList = countries.filter((country) =>
       country.name.common.toLowerCase().includes(keyword)
     );
     setCountryList(filteredList);
   };



  return (
    <>
      <Button className="countryDrop" onClick={() => setOpen(!open)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">
            {selectedCountry === ""
              ? "Select Location"
              : selectedCountry.length > 14
              ? selectedCountry.substring(0, 14)+".."
              : selectedCountry}
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(!open)}
        className="locationModal "
        TransitionComponent={Transition}
      >
        <Button className="close_btn" onClick={() => setOpen(!open)}>
          <IoIosClose />
        </Button>
        <h5>Select your delivery location</h5>
        <p className="text-start">
          Enter your address and we will specify the offer for your area.
        </p>

        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="What your area.."
            onChange={filterCountry}
          />
          <Button>
            <IoSearch />{" "}
          </Button>
        </div>

        <ul className="countryList mt-3">
          <li>
            <Button onClick={() => setOpen(!open)}>Select Location</Button>
            <span className="price">Clear All</span>
          </li>
          {countries.length !== null &&
            countryList.map((country, id) => (
              <li key={id}>
                <Button
                  onClick={() => selectCountry(id, country.name.common)}
                  className={`${selectedTab === id ? "active" : ""}`}
                >
                  {country.name.common}
                </Button>
                <span className="price">Min:ETB30</span>
              </li>
            ))}
        </ul>
      </Dialog>
    </>
  );
}

export default CountryDrop;
