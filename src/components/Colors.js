import React from "react";

const defaultColor = ["red", "green", "blue"];

const Colors = (props) => {
  const color = props.color ? props.color : defaultColor;

  return (
    <div className="colors">
      <ul>
        {color.map((items, index) => (
          <li key={index} style={{ backgroundColor: items }}></li>
        ))}
      </ul>
    </div>
  );
};

export default Colors;
