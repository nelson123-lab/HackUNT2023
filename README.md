<div align="center"><img src="https://github.com/nelson123-lab/SimpliFin/blob/2dd388734ec9f7329eaf07e07c5e329fa857f465/client/public/icon16.png" width="900"/></div>

# SimpliFin

## Inspiration
The idea of SimpliFin stems from the recognition that finance, for many, is like trying to unravel a magician's card trick—confusing, with lots of terms up its sleeves. We noticed that people often feel like they're deciphering an ancient scroll when trying to understand financial jargon. The struggle is real! The complexity of financial terms often leads to confusion, making it difficult for individuals to grasp essential concepts. Recognizing this common struggle, our team was inspired to create a tool that empowers users to navigate the complexities of finance seamlessly.

## What We Learned
Throughout the development of SimpliFin, our team expanded our skill set in our Frontend and Backend skills. We delved into the intricacies of building a Chrome extension, honing our skills in UI/UX design, integrating various APIs for translation and text-to-speech, and exploring innovative ways to enhance the learning experience. The process taught us the importance of adaptability and continuous learning.

## How We Built Our Project
We created a Chrome extension using React.js and CSS for the front end and connected it to our backend (Python) using Flask. We also incorporated a database, MongoDB to store our data.

## Challenges We Faced
For the majority of our team, it was our first time using a Chrome extension and incorporating a database for the first time. We had a huge learning curve to overcome in a short amount of time as we were not too familiar with the syntax.

## What We Created
We created a Chrome extension that helps make financial knowledge accessible to everyone. Features we included were Language translation, Text-to-speech based on selected text, Summarization of selected text, Definition of terms selected, Flashcards of terms saved, and Chatbot using a Webscraper to simplify information on the website using the URL.

## Built With
beautiful-soup, css, react, flask, langchain, node.js, openai, pydictionary, python

## Usage

- Fork the repository
- Create a **.env** file in the same location as the **.gitignore** file and add your OPEN_AI_KEY = "YOUR_API_KEY".
- Navigate to the client folder and run npm run build. This will install the dependencies in the client side. You should have the node.js installed in your computer.
  ```python
  npm run build
  ```
- Navigate to the server side and install the libraries from the requirements.txt file.
  ```python
  pip freeze > requirements.txt
  ```
- To run the chrome extension, open a new terminal click **Ctrl + shift + `** on the keyboard and use the command.
  ```python
  python run server.py
  ```
- Open the chrome and go to extensions Tab and go to load unpacked section and load the build file from the client.
- Pin the chrome extension and start using.
