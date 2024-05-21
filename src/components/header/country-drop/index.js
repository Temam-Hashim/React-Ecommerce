import React, { useState } from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
// import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { IoSearch } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import Slide from "@mui/material/Slide";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CountryDrop() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button className="countryDrop" onClick={() => setOpen(!open)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">Ethiopia</span>
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
        <p>Enter your address and we will specify the offer for your area.</p>

        <div className="headerSearch w-100">
          <input type="text" placeholder="What your area.." />
          <Button>
            <IoSearch />{" "}
          </Button>
        </div>

        <ul className="countryList mt-3">
          <li>
            <Button onClick={() => setOpen(!open)}>Select Location</Button>
            <span className="price">Clear All</span>
          </li>
          <li>
            <Button onClick={() => setOpen(!open)}>Ethiopia</Button>
            <span className="price">Min:ETB30</span>
          </li>
          <li>
            <Button onClick={() => setOpen(!open)}>Angola</Button>
            <span className="price">Min:ETB30</span>
          </li>
          <li>
            <Button onClick={() => setOpen(!open)}>South Africa</Button>
            <span className="price">Min:ETB30</span>
          </li>
          <li>
            <Button onClick={() => setOpen(!open)}>Nigeria</Button>
            <span className="price">Min:ETB30</span>
          </li>
          <li>
            <Button onClick={() => setOpen(!open)}>Egypt</Button>
            <span className="price">Min:ETB30</span>
          </li>

          <li>
            <Button onClick={() => setOpen(!open)}>Sudan</Button>
            <span className="price">Min:ETB30</span>
          </li>

          <li>
            <Button onClick={() => setOpen(!open)}>Erteria</Button>
            <span className="price">Min:ETB30</span>
          </li>

          <li>
            <Button onClick={() => setOpen(!open)}>Djibuti</Button>
            <span className="price">Min:ETB30</span>
          </li>

          <li>
            <Button onClick={() => setOpen(!open)}>Sudan</Button>
            <span className="price">Min:ETB30</span>
          </li>

          <li>
            <Button onClick={() => setOpen(!open)}>Kenya</Button>
            <span className="price">Min:ETB30</span>
          </li>
        </ul>
      </Dialog>
    </>
  );
}

export default CountryDrop;
