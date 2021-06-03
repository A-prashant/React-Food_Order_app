import React from "react";
//import style
import style from "../../style/Card.module.css";

const Card = (props) => {
  return <div className={style.card}>{props.children}</div>;
};

export default Card;
