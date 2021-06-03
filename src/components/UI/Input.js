import React from "react";
//input css
import style from "../../style/Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={style.input}>
      <label htmlfor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
