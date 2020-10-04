import React from "react";

export default ({ onRandomClick }) => {
  return (
    <header>
      <button onClick={onRandomClick}>
        Random <span className="material-icons">loop</span>
      </button>
    </header>
  );
};
