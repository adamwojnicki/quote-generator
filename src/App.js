import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import SingleQuote from "./components/SingleQuote";
import QuoteList from "./components/QuoteList";

export default class App extends Component {
  state = {
    singleQuote: {},
    quotes: [],
  };

  async getRandomQuote() {
    this.setState({ quotes: [], singleQuote: {} });
    const res = await axios.get(
      "https://quote-garden.herokuapp.com/api/v2/quotes/random"
    );
    this.setState({ singleQuote: res.data.quote });
  }

  async getQuotesByAuthor() {
    const res = await axios.get(
      `https://quote-garden.herokuapp.com/api/v2/authors/${this.state.singleQuote.quoteAuthor}?page=1&limit=10`
    );
    this.setState({ quotes: res.data.quotes });
    console.log(this.state.quotes);
  }

  componentDidMount() {
    this.getRandomQuote();
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
          {this.state.quotes.length > 0 ? (
            <QuoteList
              quotes={this.state.quotes}
              author={this.state.singleQuote.quoteAuthor}
            />
          ) : (
            <SingleQuote
              text={this.state.singleQuote.quoteText}
              author={this.state.singleQuote.quoteAuthor}
              genre={this.state.singleQuote.quoteGenre}
              getQuotesList={() => this.getQuotesByAuthor()}
            />
          )}
        </main>
      </div>
    );
  }
}
