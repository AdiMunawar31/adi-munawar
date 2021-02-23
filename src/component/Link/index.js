import React from "react";

const Link = ({ title, onClick }) => {
  return (
    <div>
      <p className="btn btn-info" onClick={onClick}>
        {title}
      </p>
    </div>
  );
};

export default Link;
