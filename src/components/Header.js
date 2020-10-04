import React from "react";

export default function Header({ onRandomClick }) {
  return (
    <header>
      <button onClick={onRandomClick}>
        Random <span className="material-icons">loop</span>
      </button>
    </header>
  );
}
