/* global chrome */
import React, { useState, useRef } from 'react'
import axios from 'axios'

export default function Webchat (){
    const [response, setResponse] = useState('')
    const textRef = useRef();
    let url
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        console.log('Querying active tab:', tabs);
        console.log(tabs[0].url)
        url = tabs[0].url
    })
    
    const handleChat = async(e) => {
        e.preventDefault()
        console.log("Chat with webpage called")
        let temp_response
        console.log(textRef.current.value)
        temp_response = await axios.post('http://127.0.0.1:5000/webchat', {
          text: textRef.current,
          webLink: url
        })
        console.log(temp_response.data.response)
        setResponse(temp_response.data.response)
      }

    return(
        <div>
            <input type='Text' placeholder='Chat with Webpage!' ref={textRef}></input>
            <button onClick={handleChat}>Send</button>
            <div>{response}</div>
        </div>
    )
}