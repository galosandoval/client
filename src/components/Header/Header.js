import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import {AccessTime as AccessTimeIcon, HelpOutline as HelpOutlineIcon, Search as SearchIcon} from "@material-ui/icons";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatars for logged in user */}
        <Avatar className="header__avatar" alt="Galo" src="" />
        {/* Time icon */}
        <AccessTimeIcon classname="header__icon" />
      </div>
      <div className="header__search">
        {/* Search icon */}
        <SearchIcon />
        {/* input */}
        <input placeholder="Search"></input>
      </div>
      <div className="header__right">
        {/* help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
