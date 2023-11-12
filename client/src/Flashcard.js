import React, { useState } from 'react';
import { Box, Text, Flex, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const Flashcard = () => {
  const [flashcards] = useState([
    { term: 'Term 1', definition: 'Definition 1' },
    { term: 'Term 2', definition: 'Definition 2' },
    { term: 'Term 3', definition: 'Definition 3' },
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentFlashcard = flashcards[currentCardIndex];

  const handleNextCard = () => {
    if (isFlipped) {
      // If the card is flipped, just go to the next card without changing the flip state
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    } else {
      // If the card is not flipped, flip it
      setIsFlipped(true);
    }
  };
  
  
  
  
  const handlePrevCard = () => {
    if (isFlipped) {
      // If the card is flipped, just go to the previous card without changing the flip state
      setCurrentCardIndex((prevIndex) => {
        const newIndex = prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1;
        return newIndex;
      });
    } else {
      // If the card is not flipped, flip it
      setIsFlipped(true);
    }
  };
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  

  return (
    <Box
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      bg="white"
      mt={8}
      height="200px"
      width="300px"
      background="#FFFFEA"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="150px"
        onClick={handleFlip}
        cursor="pointer"
        position="relative"
      >
        {!isFlipped && (
            <Text display="block">{currentFlashcard.term}</Text>
        )}

        {isFlipped && (
            <Text display="block">{currentFlashcard.definition}</Text>
        )}




        {/* Arrows */}
        <Flex
          justifyContent="space-between"
          bottom="8px"
          width="100%"
          height="100%"
          zIndex={1}
        >
          <IconButton icon={<ArrowBackIcon />} colorScheme="green" onClick={handlePrevCard} />
          <IconButton icon={<ArrowForwardIcon />} colorScheme="green" onClick={handleNextCard} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Flashcard;