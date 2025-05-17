import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';


function App() {

  const [quote, setQuote] = useState("");
  const [auther, setAuther] = useState("");

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuther(quote.author);
        }

      )

  }, []);


  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuther(quote.author);
        }
      )
  }

  return (
    <div className="App">
      <div className='quote-box'>
        <h1>{quote}</h1>
        <p><i>- {auther}</i></p>
      </div>
      <button className='rainbow-btn' onClick={fetchNewQuote}><span> Generate New Quotes</span></button>
    </div>
  );
}

export default App;
