import React from "react";

const Button = (props) => {
  return (
    <button {...props}>
      {props.children}
      <style jsx>{`
        button {
          background: ${props.bgColor};
          border: ${props.border};
          border-radius: 0px;
          box-shadow: none;
          color: ${props.textColor};
          cursor: pointer;
          flex: 0 0 auto;
          padding: 0.5rem;
          line-height: 1.3;
          font-family: Poppins, sans-serif;
          box-sizing: border-box;
          width: ${props.width};
        }

        button:focus {
          outline: none;
        }
      `}</style>
    </button>
  );
};

export default Button;
