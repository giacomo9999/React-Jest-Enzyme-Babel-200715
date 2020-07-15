import React from "react";

const Header = ({ message, handleToggleTheme, theme }) => {
  return (
    <div className="header">
      <h1>{message}</h1>
      <button className="right" onClick={handleToggleTheme}>
        <i className={theme}></i>
      </button>
    </div>
  );
};

export default Header;
