// src/Chat.js
/* global chrome */
import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Tabs, TabPanels, TabPanel, Tab, TabList} from '@chakra-ui/react';
import Webchat from './Webchat';
import Gptchat from './Gptchat';

const Chat = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Tabs colorScheme='green'>
        <TabList>
            <Tab>Chat with Website</Tab>
            <Tab>Chat with GPT</Tab>
        </TabList> 

        <TabPanels>
            <TabPanel>
            <Webchat />
            </TabPanel>
            <TabPanel>
            <Gptchat />
            </TabPanel>
        </TabPanels>
    </Tabs>
    </div>
  );
};

export default Chat;
