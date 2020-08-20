import React from "react";

const Separator = ({ backgroundColor }) => {
  return (
    <div className="separator">
      <style jsx>
        {`
          width: 100%;
          height: 3.5rem;
          background-color: ${backgroundColor};
        `}
      </style>
    </div>
  );
};

export default Separator;
