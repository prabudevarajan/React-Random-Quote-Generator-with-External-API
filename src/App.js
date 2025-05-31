import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faClipboard } from '@fortawesome/free-solid-svg-icons'





function App() {

  const [quote, setQuote] = useState("");
  const [auther, setAuther] = useState("");
  const [copyText, setCopyText] = useState("");

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

  const copyToClipboard = () => {
    const copyText = `"${quote}" - ${auther}`;
    navigator.clipboard.writeText(copyText)
      .then(() => {
        setCopyText(true);
        setTimeout(() => setCopyText(false), 5000);
      })
      .catch((error) => console.error("Error", error));
  };


  return (
    <div className="App">
      <div className='quote-box'>
        <h1>{quote}</h1>
        <p><i>- {auther}</i></p>
      </div>
      

      <hr />
      <div className='card-footer'>        
        <FontAwesomeIcon icon={faCopy} size="2x" onClick={copyToClipboard}><span> Generate New Quotes</span> </FontAwesomeIcon>
        {copyText && <span className='copied-message'>Copied</span>}
        <button className='rainbow-btn' onClick={fetchNewQuote}><span> Generate New Quotes</span></button>


      </div>
    </div>
  );
}

export default App;
