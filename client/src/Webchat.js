/* global chrome */
import React, { useState, useRef } from 'react'
import axios from 'axios'
import { HStack, Button } from '@chakra-ui/react';

export default function Webchat (){
    const [response, setResponse] = useState('')
    const textRef = useRef();
    let url
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        url = tabs[0].url
    })
    
    const handleChat = async(e) => {
        e.preventDefault()
        console.log("Chat with webpage called")
        let temp_response
        console.log(textRef.current.value)
        console.log(url)
        temp_response = await axios.post('http://127.0.0.1:5000/webchat', {
          text: textRef.current.value,
          webLink: url
        })
        console.log(temp_response.data.response)
        setResponse(temp_response.data.response)
      }

    return(
        <div>
            <HStack background='#FFFFEA'>
              <p><input font-size='8px' type='Text' placeholder='Type your message here!' ref={textRef}></input></p>
              <Button colorScheme='green' onClick={handleChat}>Send</Button>
            </HStack>
            <p>Website's Response: </p>
            <div font-size='8px'><p>{response}</p></div>
            <br/>
        </div>
    )
}