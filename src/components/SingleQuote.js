import React from "react";

export default function SingleQuote([
  quoteAuthor,
  quoteGenre,
  quoteText,
  getQuotesList,
]) {
  return (
    <>
      <blockquote>{quoteText}</blockquote>;
      <button onClick={() => getQuotesList}>
        <p className="author">{quoteAuthor}</p>
        <p className="category">{quoteGenre}</p>
      </button>
    </>
  );
}
