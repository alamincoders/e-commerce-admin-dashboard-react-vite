import React from "react";

const Input = ({ place, className, type }) => {
  return (
    <div>
      <input required className={`${className}`} type={`${type}`} placeholder={`${place}`} />
    </div>
  );
};

export default Input;
