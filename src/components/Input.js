import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <label>{props.label}</label>
      <input type={props.type} ref={ref} />
    </>
  );
});

export default Input;
