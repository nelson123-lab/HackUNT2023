// src/Popup.js
/* global chrome */
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { Button, HStack} from '@chakra-ui/react';

const Popup = () => {
  const [selectedText, setSelectedText] = useState('');
  const [response, setResponse] = useState('') 
  const [lang, setLang] = useState('')
  const [audioFile, setAudioFile] = useState(null);
  
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

  const getDef = async(e) => {
    e.preventDefault()
    console.log("Get definition called")
    let temp_response
    if (selectedText.length > 10){
      temp_response = await axios.post('http://127.0.0.1:5000/summarize', {
      para: selectedText
    })
    }
    else{
      temp_response = await axios.post('http://127.0.0.1:5000/definition', {
      word: selectedText
    })
    }
    
    console.log(temp_response.data.response)
    setResponse(temp_response.data.response)
  }

  const getTranslation = async(e) => {
    e.preventDefault()
    console.log("Translate called")
    let temp_response
    temp_response = await axios.post('http://127.0.0.1:5000/translate', {
      para: selectedText,
      lang: "es"
    })
    console.log(temp_response.data.response)
    setResponse(temp_response.data.response)
  }

  const sendVoice = async(e) => {
    e.preventDefault()
    console.log("Voice function called")
    let temp_response
    temp_response = await axios.post('http://127.0.0.1:5000/tts', {
      para: response
    })
    const audioUrl = URL.createObjectURL(response.data);
    setAudioFile(audioUrl);
  }
  return (
    <div style={{ padding: '20px' }}>
      <h1>Selected Text:</h1>
      <p>{selectedText}</p>
      <HStack align='center'>
        <Button colorScheme='green' onClick={getDef}>{selectedText.length > 10 ? "Summarize" : "Lookup"}</Button>
        <Button colorScheme='green' onClick={getTranslation}>Translate</Button>
      </HStack>
      <p>{response}<Button colorScheme='green'onClick={sendVoice}>Audio</Button>{audioFile && <audio autoPlay controls src={audioFile} />}</p>
    </div>
  );
};

export default Popup;
