import React from "react";

const List = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <li className="item" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
