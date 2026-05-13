import React from "react";
import UpperHeader from "./UpperHeader";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";

function Header({ toggleMenu, toggleSignIn, toggleCart, toggleLocation, selectedLocation }) {
  return (
    <div>
      <UpperHeader />
      <SearchBar toggleMenu={toggleMenu} toggleSignIn={toggleSignIn} toggleCart={toggleCart} toggleLocation={toggleLocation} selectedLocation={selectedLocation} />
      <Navbar />
    </div>
  );
}

export default Header;
