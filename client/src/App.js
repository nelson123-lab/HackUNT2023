import { ChakraProvider, Input } from '@chakra-ui/react';
import { Button, Stack } from '@chakra-ui/react';
import { PlusSquareIcon, EditIcon } from '@chakra-ui/icons';
import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import './App.css';

/* global chrome */

function App() {
  const [deckNames, setDeckNames] = useState(['Deck 1']);
  const [editDeckIndex, setEditDeckIndex] = useState(null);
  const [newDeckName, setNewDeckName] = useState('');

  const addNewDeck = () => {
    setDeckNames((prevNames) => [...prevNames, `Deck ${prevNames.length + 1}`]);
  };

  const handleEditClick = (index, e) => {
    // Check if the click target is the icon
    const isIconClick = e.target.tagName.toLowerCase() === 'svg';

    if (isIconClick) {
      // Handle edit functionality (e.g., open the editing interface)
      setEditDeckIndex(index);
      setNewDeckName(deckNames[index] || ''); // Ensure deckNames[index] is defined
    } else {
      // Go to another page (Deck Page)
      window.location.href = 'https://chakra-ui.com/docs/components/button/usage#button-with-icon';
    }
  };

  const handleSaveEdit = () => {
    // Save the edited deck name
    const updatedDeckNames = [...deckNames];
    updatedDeckNames[editDeckIndex] = newDeckName.slice(0, 15).trim();
    setDeckNames(updatedDeckNames);
  
    // Reset edit state
    setEditDeckIndex(null);
    setNewDeckName('');
  };
  
  return (
    <ChakraProvider>
      <Popup/>
          {/* <div className="App">
        <header className="App-header">
          <div className="appname">Money Matters</div>
          <p>Learn Everything, Master Anything: Where Finance Meets Knowledge</p>
          <div className='instructions'>Start learning by highlighting text on your current website or clicking a deck below!</div>
          <Stack spacing={4} direction='column' align='center' padding='30px'>
            {deckNames.map((deckName, index) => (
              <Button
                key={index}
                width='300px'
                colorScheme='green'
                size='md'
                marginRight='0'
                rightIcon={<EditIcon />}
                onClick={(e) => handleEditClick(index, e)}
              >
                {editDeckIndex === index ? (
                  <Input
                  value={newDeckName}
                  onChange={(e) => setNewDeckName(e.target.value)}
                  autoFocus
                  onBlur={() => handleSaveEdit()}
                  maxLength={15}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleSaveEdit();
                    }
                  }}
                />
                
                ) : (
                  deckName
                )}
              </Button>
            ))}
            <br />
            <Button
              leftIcon={<PlusSquareIcon />}
              width='300px'
              size='md'
              colorScheme='green'
              variant='solid'
              onClick={addNewDeck}
            >
              Add a New Deck
            </Button>
          </Stack>
        </header>
      </div> */}
</ChakraProvider>
  );
}

export default App;
