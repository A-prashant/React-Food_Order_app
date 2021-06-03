import React, { useContext, useEffect, useState } from "react";
//import css
import style from "../../style/HeaderCartButton.module.css";
//import icon
import CartIcon from "../Cart/CartIcon";
//import cart context
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlited, setBtnIsHighlited] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnStyle = `${style.button} ${btnIsHighlited ? style.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlited(true);

    const timer = setTimeout(() => {
      setBtnIsHighlited(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx]);
  return (
    <button className={btnStyle} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
