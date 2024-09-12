import React from "react";

const CustomInput = (props) => {
  const { type, name, id, placeholder, className } = props;
  return (
    <div className="mb-3">
      <input
        type={type}
        className={`form-control ${className}`}
        placeholder={placeholder}
        name={name}
        id={id}
      />
    </div>
  );
};

export default CustomInput;
