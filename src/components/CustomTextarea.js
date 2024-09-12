import React from "react";

const CustomTextarea = (props) => {
  const { name, id, placeholder, className, rows, cols, children } = props;
  return (
    <div className="mb-3">
      <textarea
        className={`form-control ${className}`}
        placeholder={placeholder}
        name={name}
        id={id}
        rows={rows}
        cols={cols}
      >
        {children}
      </textarea>
    </div>
  );
};

export default CustomTextarea;
