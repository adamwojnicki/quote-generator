import React, { Component } from "react";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  state = {
    singleQuote: {},
    quotes: [],
  };

  async getRandomQuote() {
    this.setState({ quotes: [] });
    const res = await axios.get(
      "https://quote-garden.herokuapp.com/api/v2/quotes/random"
    );
    this.setState({ singleQuote: res.data.quote });
  }

  async getQuotesByAuthor() {
    this.setState({ singleQuote: {} });
    const res = await axios.get(
      `https://quote-garden.herokuapp.com/api/v2/authors/${this.state.singleQuote.quoteAuthor}?page=1&limit=10`
    );
    this.setState({ quotes: res.data.quotes });
    console.log(this.state.quotes);
  }

  componentDidMount() {
    this.getRandomQuote();
  }

  renderQuote() {
    return <blockquote>{this.state.singleQuote.quoteText}</blockquote>;
  }

  renderQuoteList() {
    return this.state.quotes.map((q) => (
      <blockquote key={q._id}>{q.quoteText}</blockquote>
    ));
  }

  render() {
    if (!this.state.singleQuote || !this.state.quotes.length === 0) {
      return <p>Loading...</p>;
    }
    return (
      <div className="container">
        <header>
          <button onClick={() => this.getRandomQuote()}>random</button>
        </header>
        <main>
          {this.state.quotes.length > 0
            ? this.renderQuoteList()
            : this.renderQuote()}
          <button onClick={() => this.getQuotesByAuthor()}>
            <p className="author">{this.state.singleQuote.quoteAuthor}</p>
            <p className="category">{this.state.singleQuote.quoteGenre}</p>
          </button>
        </main>
      </div>
    );
  }
}
