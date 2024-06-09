// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Card(props) {
    // eslint-disable-next-line react/prop-types
    const {children} = props;
  return (
    <li className="todoItem">
        {children}
      <div className="actionsContainer">
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-regular fa-trash-can"></i>
      </div>
    </li>
  );
}
