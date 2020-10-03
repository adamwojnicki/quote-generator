import React, { Component } from "react";

export default class QuoteList extends Component {
  renderList() {
    return this.props.quotes.map((q) => (
      <blockquote key={q._id}>{q.quoteText}</blockquote>
    ));
  }
  render() {
    return (
      <>
        <h2 className="quote-author">{this.props.author}</h2>
        {this.renderList()}
      </>
    );
  }
}
