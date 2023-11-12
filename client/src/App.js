/* global chrome */
import { ChakraProvider, Input } from '@chakra-ui/react';
import { Button, Stack } from '@chakra-ui/react';
import { PlusSquareIcon, EditIcon } from '@chakra-ui/icons';
import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import Flashcard from './Flashcard';
import Chat from './Chat';
import './App.css';



function App() {

  let messageURL;
  // useEffect(() => {
  //   // Add event listener to listen for messages from the background script
  //   chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  //     messageURL = message.currentURL
  //   })});


  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <div className="appname">Money Matters</div>
          <p>Learn Everything, Master Anything: Where Finance Meets Knowledge</p>
          <div className='instructions'>Start learning by highlighting text on your current website or clicking a deck below!</div>
          <Popup/>
          <hr/>
          <Flashcard/>
          <hr/>
          <Chat/>
          <hr/>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
