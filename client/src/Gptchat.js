/* global chrome */
import React, { useState,useRef } from 'react'
import axios from 'axios'

export default function Gptchat (){
    const [response, setResponse] = useState('')
    const textRef = useRef();

    const handleChat = async(e) => {
        e.preventDefault()
        console.log("Chat with webpage called")
        let temp_response
        temp_response = await axios.post('http://127.0.0.1:5000/gptchat', {
          text: textRef.current.value
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