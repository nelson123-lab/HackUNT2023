// src/Chat.js
/* global chrome */
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { Button, Tabs, TabPanels, TabPanel, Tab, TabList} from '@chakra-ui/react';

const Chat = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Tabs>
        <TabList>
            <Tab>Chat with Website</Tab>
            <Tab>Chat with GPT</Tab>
        </TabList> 

        <TabPanels>
            <TabPanel>
            <p>run the code of the webscraper!</p>
            </TabPanel>
            <TabPanel>
            <p>run the code of the gpt!</p>
            </TabPanel>
        </TabPanels>
    </Tabs>
    </div>
  );
};

export default Chat;
