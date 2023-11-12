/* global chrome */
import React, { useState,useRef } from 'react'
import axios from 'axios'
import { Button, HStack } from '@chakra-ui/react';

export default function Gptchat (){
    const [response, setResponse] = useState('')
    const textRef = useRef();

    const handleChat = async(e) => {
        e.preventDefault()
        console.log("Chat with gpt called")
        let temp_response
        temp_response = await axios.post('http://127.0.0.1:5000/gptchat', {
          text: textRef.current.value
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
            <p>GPT's Response: </p>
            <div font-size='8px'><p>{response}</p></div>
            <br/>
        </div>
    )
}