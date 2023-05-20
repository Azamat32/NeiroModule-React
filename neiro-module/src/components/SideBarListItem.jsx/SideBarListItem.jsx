import React from "react";
import "./SideBarListItem.scss";
import { NavLink } from "react-router-dom";

function SideBarListItem(props) {
  return (
    <NavLink className="SideBarListItem" to={props.path}>
      <img src={props.iconImage} alt="" />
      <h2>{props.text}</h2>
    </NavLink>

   
  );
}

export default SideBarListItem;
