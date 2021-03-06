import React from "react";

export default ({ text, genre, author, getQuotesList }) => {
  return (
    <>
      <blockquote>{text}</blockquote>;
      <button onClick={getQuotesList}>
        <p className="author">{author}</p>
        <p className="category">{genre}</p>
      </button>
    </>
  );
};
