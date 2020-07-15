import React from "react";

const Form = ({ handleChange, value, handleClick }) => {
  return (
    <div className="form">
      <input
        className="form-control"
        type="text"
        onChange={handleChange}
        value={value}
      />
      <button className="btn" onClick={handleClick}></button>
    </div>
  );
};

export default Form;
