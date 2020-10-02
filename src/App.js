import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <button>random</button>
        </header>
        <main>
          <blockquote>
            “The first rule of any technology used in a business is that
            automation applied to an efficient operation will magnify the
            efficiency. The second is that automation applied to an inefficient
            operation will magnify the inefficiency.”
          </blockquote>
          <button>
            <p>Bill Gates</p>
            <p>Business</p>
          </button>
        </main>
      </div>
    );
  }
}
