import React from 'react';

const Input = ({
  value,
  onChange,
  placeholder = "",
  rows = 4,
  className = "",
  ...props
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
      {...props}
    />
  );
};

export default Input;
