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
      `https://quote-garden.herokuapp.com/api/v2/authors/${this.state.singleQuote.quoteAuthor}?page=1`
    );
    this.setState({ quotes: res.data.quotes });
  }

  componentDidMount() {
    this.getRandomQuote();
  }

  render() {
    return (
      <div className="container">
        <header>
          <button onClick={() => this.getRandomQuote()}>
            Random <span class="material-icons">loop</span>
          </button>
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
