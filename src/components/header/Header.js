import React from "react";
import logo from "./../../assets/images/logo2.jpg";
import { Link } from "react-router-dom";
import CountryDrop from "./country-drop";
import { Button } from "@mui/material";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { PiHandPalmLight } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import HeaderSearch from "./search-box";
import Navigation from "./navigation";


function Header() {
  return (
    <div className="headerWrapper">
      <div className="top-strip">
        <div className="container">
          <p className=" mt-0 mb-0 text-center">
            Based on the distance delivery fee may differ from place to place
          </p>
        </div>
      </div>

      <div className="sub-strip">
        <div className="container">
            <div className="row">
                <div className="col-md-4 sub-info" >
                    <Link to="/about" className="sub-link"><span>About us</span></Link>
                    <Link to="/my-account" className="sub-link"><span>My Account</span></Link>
                    <Link to="/wish-list" className="sub-link"><span>Wish list</span></Link>
                    <Link to="/order-tracking" className="sub-link"><span>Order tracking</span></Link>
                </div>


                <div className="col-md-8 sub-info d-flex justify-content-around align-items-center pr-5">
                        <p className="text-center pt-3"> <PiHandPalmLight size={24}/> 100% Secure delivery and secure payment</p>
                        <p className="text-center pt-3"> Need help? Call Us: <span class="text-info font-weight-bold">+251 917 94 85 44</span></p>
                        <Link to="/about" className="sub-link"><span>English <FaAngleDown/></span></Link>
                        <Link to="/about" className="sub-link"><span>ETB <FaAngleDown/></span></Link>
                </div>

            </div>
     
        </div>
      </div>


    
      <header className="header">
        <div className="container">
          <div class="row">
            <div className="logoWrapper d-flex align-items-center col-sm-2">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <div className="col-sm-10 d-flex align-items-center part2">
              <CountryDrop />
              {/* header search */}
             <HeaderSearch/>

              {/* cart and account area */}
              <div className="part3 d-flex align-items-center ml-auto p-3">
                <Button className="profile mr-3">
                  <FiUser />
                </Button>

                <div class="ml-auto cartTab d-flex align-items-center">
                  <span class="price">$3.22</span>

                  <div className="ml-2 position-relative d-flex align-items-center justify-content-center">
                    <Button className="profile ">
                      <IoBagOutline />
                    </Button>
                    <span className="cartCount">1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Navigation/>

  

    </div>
  );
}

export default Header;
