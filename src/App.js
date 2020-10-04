import React, { Component } from "react";
import "./App.css";

import SingleQuote from "./components/SingleQuote";
import QuoteList from "./components/QuoteList";

import { quoteGarden } from "./apis/quoteGarden";

export default class App extends Component {
  state = {
    singleQuote: {},
    quotes: [],
  };

  async getRandomQuote() {
    this.setState({ quotes: [], singleQuote: {} });
    try {
      const res = await quoteGarden.get("quotes/random");
      this.setState({ singleQuote: res.data.quote });
    } catch {
      console.log("An error occurred...");
    }
  }

  async getQuotesByAuthor() {
    try {
      const res = await quoteGarden.get(
        `authors/${this.state.singleQuote.quoteAuthor}?page=1`
      );
      this.setState({ quotes: res.data.quotes });
    } catch {
      console.log("An error occurred...");
    }
  }

  componentDidMount() {
    this.getRandomQuote();
  }

  render() {
    return (
      <div className="container">
        <header>
          <button onClick={() => this.getRandomQuote()}>
            Random <span className="material-icons">loop</span>
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
