import React from "react";

export const Button = ({ children, styles }) => {
  return <button className={`${styles} `}>{children}</button>;
};
