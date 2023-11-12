// src/Popup.js
/* global chrome */
import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [selectedText, setSelectedText] = useState('');

  const handleSelection = () => {
    //test
    let tab1
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log('Querying active tab:', tabs);
      console.log(tabs[0].url)
      tab1 = tabs[0]
    })

    const selection = tab1.getSelection();
    console.log('Selection')
    console.log(selection);
    const text = selection.toString();
    console.log('Text')
    console.log(text);
    setSelectedText(text);
  };

  useEffect(() => {
    console.log('Popup component mounted.');

    // Get the selected text from the content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log('Querying active tab:', tabs);
      console.log(tabs[0].url)
      
      console.log(tabs[0].id)
      chrome.tabs.sendMessage(tabs[0].id, { action: 'getSelectedText' }, (response) => {
        // undefined here
        console.log('Response');
        console.log(response);

        // Check if response exists and has the expected property
        if (response && response.selectedText) {
          setSelectedText(response.selectedText);
        } else {
          console.error('Invalid response:', response);
        }
      });
    });

    // Add event listener for mouseup to capture selected text
    document.onmouseup = handleSelection;

    // Clean up the event listener when the component is unmounted
    return () => {
      document.onmouseup = null;
    };
  }, []); // Empty dependency array to run this effect only once

  return (
    <div style={{ padding: '20px' }}>
      <h1>Selected Text:</h1>
      <p>{selectedText}</p>
    </div>
  );
};

export default Popup;
