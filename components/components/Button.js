import React from "react";

const Button = ({ className, children, bgColor, textColor, width, border }) => {
  return (
    <button className={className}>
      {children}
      <style jsx>{`
        button {
          background: ${bgColor};
          border: ${border};
          border-radius: 0px;
          box-shadow: none;
          color: ${textColor};
          cursor: pointer;
          flex: 0 0 auto;
          padding: 0.5rem;
          line-height: 1.3;
          font-family: Poppins, sans-serif;
          box-sizing: border-box;
          width: ${width};
        }

        button:focus {
          outline: none;
        }
      `}</style>
    </button>
  );
};

export default Button;
