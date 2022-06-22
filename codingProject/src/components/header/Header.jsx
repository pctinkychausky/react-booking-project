import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <div className="headerSearch">
        <div className="background-image">
          <img
            id="header-image"
            src="https://www.etyres.co.uk/blog/wp-content/uploads/2021/07/roadtrip-1583526313.jpg"
            alt=""
            height="550px"
            width="100%"
          />
        </div>
        <div className="header-container">
          <div>
            <h1 className="header-title">Find your ride</h1>
          </div>
          <div className="search-control-master-container">
            <div className="search-control-location-container">
              <div className="search-Control-title title">Pick-up Location</div>
              <div className="search-Control-input">
                <input
                  type="text"
                  placeholder="Pick-up Location"
                  className="headerSearchInput"
                />
              </div>
            </div>
            <div className="search-control-date-container">
              <div className="pickup-container">
                <div className="pickup-date  title">Pick-up Date</div>
                <div className="pickup-date-time  title">Time</div>
              </div>
              <div className="dropoff-container">
                <div className="dropoff-date  title">Drop-off Date</div>
                <div className="dropoff-date-time  title">Time</div>
              </div>
            </div>
            <div className="search-control-bottom-container">
              <div className="search-control-age  title">
                Driver aged between 25-75
              </div>
              <div className="search-button"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
