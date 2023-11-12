import openai
from dotenv import load_dotenv
import os
# Set up your OpenAI API key
load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")
# Define your query
query = 'What is the capital of France?'

# Make the API request
response = openai.Completion.create(
  engine='text-davinci-003',  # Specify the language model to use
  prompt=query,
  max_tokens=100,  # Set the maximum length of the response
  n=1,  # Specify the number of responses to generate
  stop=None,  # Set any stop conditions for the response generation
)

# Extract the generated response
generated_text = response.choices[0].text.strip()

# Print the generated response
print(generated_text)




