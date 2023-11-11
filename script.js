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