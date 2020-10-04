import React, { Component } from "react";
import "./App.css";

import SingleQuote from "./components/SingleQuote";
import QuoteList from "./components/QuoteList";
import ErrorMeassage from "./components/ErrorMessage";
import Header from "./components/Header";

import { quoteGarden } from "./apis/quoteGarden";

export default class App extends Component {
  state = {
    singleQuote: {},
    quotes: [],
    errors: null,
  };

  async getRandomQuote() {
    this.setState({ quotes: [], singleQuote: {} });
    try {
      const res = await quoteGarden.get("quotes/random");
      this.setState({ singleQuote: res.data.quote });
    } catch (error) {
      this.setState({ errors: error });
    }
  }

  async getQuotesByAuthor() {
    try {
      const res = await quoteGarden.get(
        `authors/${this.state.singleQuote.quoteAuthor}?page=1`
      );
      this.setState({ quotes: res.data.quotes });
    } catch (error) {
      this.setState({ errors: error });
    }
  }

  componentDidMount() {
    this.getRandomQuote();
  }

  render() {
    if (this.state.errors) {
      return <ErrorMeassage />;
    }
    return (
      <div className="container">
        <Header onRandomClick={() => this.getRandomQuote()} />
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
