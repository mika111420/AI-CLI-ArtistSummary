// dependencies
const { OpenAI } = require('langchain/llms/openai');
const inquirer = require('inquirer');
require('dotenv').config();

//instantiating OpenAI...creates wrapper for AI package & configuration

const model = new OpenAI({ 
    openAIApiKey: process.env.OPENAI_API_KEY, 
    temperature: 0,
    model: 'gpt-3.5-turbo'
  });
  
  console.log({ model });

  // Uses the instantiated OpenAI wrapper, model, and makes a call based on input from inquirer
  const promptFunc = async (input) => {
    try {
      const res = await model.call(input);
      console.log(res);
    }
    catch (err) {
      console.error(err);
    }
  };

// Initialization function that uses inquirer to prompt the user and returns a promise. It takes the user input and passes it through the call method
  const init = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Ask about any musical artist:',
      },
    ]).then((inquirerResponse) => {
      promptFunc(inquirerResponse.name)
    });
  };
  
  init();
