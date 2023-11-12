import React, { useEffect } from 'react'
import './App.css';

function App() {
  let messageURL;
  useEffect(() => {
    // Add event listener to listen for messages from the background script
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      messageURL = message.currentURL
    })});


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hey, let's add this word
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
