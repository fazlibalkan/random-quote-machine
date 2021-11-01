import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      quote: "",
      author: "",
      tweet: ""
    });

    
    this.getNewQuote();

    this.getNewQuote = this.getNewQuote.bind(this);
  }

  //Get new quote from an API
  getNewQuote(){
    fetch("https://api.quotable.io/random")
    .then((result) => result.json())
    .then((data) => {
      this.setState({
        quote: data.content,
        author: data.author,
        tweet: "https://twitter.com/intent/tweet/?text=" + data.content.replace(/ /g, "+") + "+-" + data.author.replace(/ /g, "+")
      });
    });
  }

  
  render(){
    
    return (
        <div className="App" class="">
          <header className="App-header">
            <div id="quote-box">
              <p id="text">{this.state.quote}</p>
              <h6 id="author">{this.state.author}</h6>
              <button id="new-quote" onClick={this.getNewQuote} class="btn btn-danger">Change Quote</button>
              <a id="tweet-quote" href={this.state.tweet} target="_blank" class="btn btn-primary">Tweet This!</a>
            </div>
          </header>
        </div>
    );
  }
}

export default App;
