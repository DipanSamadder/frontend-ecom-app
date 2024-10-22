import React from "react";

const CustomInput = (props) => {
  const {
    type,
    name,
    id,
    label,
    labelShow,
    className,
    formikTouched,
    formikErrors,
    errorShow,
    onChange,
    value,
  } = props;
  return (
    <div className="mb-3">
      {labelShow === true && (
        <label htmlFor={label} className="form-label">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`form-control ${className}`}
        placeholder={labelShow === false ? label : ""}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onChange}
      />
      {errorShow && formikTouched && formikErrors ? (
        <small className="text-danger">
          <div>{formikErrors}</div>
        </small>
      ) : null}
    </div>
  );
};

export default CustomInput;
