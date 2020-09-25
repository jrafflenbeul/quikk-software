import React from "react";

const Button = ({
  className,
  children,
  bgColor,
  color,
  width,
  border,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
      <style jsx>{`
        button {
          background: ${bgColor};
          border: ${border};
          border-radius: 0px;
          box-shadow: none;
          cursor: pointer;
          flex: 0 0 auto;
          padding: 0.5rem;
          line-height: 1.3;
          font-family: Poppins, sans-serif;
          box-sizing: border-box;
          width: ${width};
          color: ${color};
        }

        button:focus {
          outline: none;
        }
      `}</style>
    </button>
  );
};

export default Button;
