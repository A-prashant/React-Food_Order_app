import React from "react";
//import image
import Meals from "../../images/meals.jpg";
//import css
import style from "../../style/Header.module.css";
//import headercartbutton
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={style.main_image}>
        <img src={Meals} alt="meal" />
      </div>
    </div>
  );
};

export default Header;
