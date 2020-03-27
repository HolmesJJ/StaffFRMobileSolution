import React from "react";

// styling
import "./index.css";

const FormItem = ({ label, value, onChange, type = "text" }) => {
  return (
    <div className="form-item">
      <div className="label">{label}</div>
      <input value={value} onChange={onChange} type={type}></input>
    </div>
  );
};

export default FormItem;
