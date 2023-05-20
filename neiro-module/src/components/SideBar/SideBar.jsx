import React from "react";
import "./SideBar.scss";
import Logo from "../../assets/img/Logo.svg";
import SideBarListItem from "../SideBarListItem.jsx/SideBarListItem";
import list from "../../assets/img/list.svg";
import people from "../../assets/img/people.svg";
import avatar from "../../assets/img/avatar.svg";

function SideBar() {
  return (
    <div className="Sidebar">
      <div className="Sidebar_inner">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="Sidebar_list">
          <SideBarListItem path="/" text="Тестирование" iconImage={list} />
          <SideBarListItem
            path="/peoples"
            text="Сотрудники"
            iconImage={people}
          />
          <SideBarListItem
            path="/account"
            text="Личный кабинет"
            iconImage={avatar}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
