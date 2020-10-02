import React, { Component } from "react";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  state = {
    quote: {},
  };

  async getRandomQuote() {
    console.log("random quote generated");
    const res = await axios.get(
      "https://quote-garden.herokuapp.com/api/v2/quotes/random"
    );
    this.setState({ quote: res.data.quote });
  }

  componentDidMount() {
    this.getRandomQuote();
  }
  render() {
    return (
      <div className="container">
        <header>
          <button onClick={() => this.getRandomQuote()}>random</button>
        </header>
        <main>
          <blockquote>{this.state.quote.quoteText}</blockquote>
          <button>
            <p className="author">{this.state.quote.quoteAuthor}</p>
            <p className="category">{this.state.quote.quoteGenre}</p>
          </button>
        </main>
      </div>
    );
  }
}
