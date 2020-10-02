import React, { Component } from "react";

export default class QuoteList extends Component {
  renderQuoteList() {
    return this.props.quotes.map((q) => (
      <blockquote key={q._id}>{q.quoteText}</blockquote>
    ));
  }
  render() {
    return (
      <>
        <h2>{this.props.author}</h2>
        {this.renderQuoteList()}
      </>
    );
  }
}
