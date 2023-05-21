import React from "react";
import Button from "../Button/Button";
import "./Header.scss";
function Header({ text }) {
  

  return (
    <div className="homePage_title">
      <h1>{text}</h1>
      <div className="homepage_btn_wrapper">
        <Button
          class="btn-prime"
          text="Назначить тестирование"
        />
        <Button class="btn-secondary" text="Сформировать ссылку" />
      </div>
    </div>
  );
}

export default Header;
