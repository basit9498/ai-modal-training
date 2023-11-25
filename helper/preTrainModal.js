// const { AutoModelForSequenceClassification, AutoTokenizer } = require('transformers');
// const tf = require('@tensorflow/tfjs-node');
// const { TFAutoModelForSequenceClassification, TFAutoTokenizer } = require('@xenova/transformers');

// async function classifyTextWithBERT(text) {
//   const modelId = 'bert-large-uncased'; // Replace with the BERT model you want to use

//   const tokenizer = AutoTokenizer.fromPretrained(modelId);
//   const model = await AutoModelForSequenceClassification.fromPretrained(modelId);

//   // Tokenize the input text
//   const inputs = tokenizer(text, { return_tensors: 'tf' });

//   // Make predictions
//   const output = await model(inputs);

//   // Interpret the model output to get your predicted ICD-10 code

//   // Replace this with your code to interpret the model's output
//   const predictedICD10 = output; // Example ICD-10 code

//   return predictedICD10;
// }


// import { TFAutoModelForSequenceClassification, TFAutoTokenizer } from '@xenova/transformers';
// import tf from "@tensorflow/tfjs-node"

// async function classifyTextWithBERT(text) {
//   const modelId = 'bert-base-uncased'; // Replace with the BERT model you want to use

//   const tokenizer = TFAutoTokenizer.fromPretrained(modelId);
//   const model = await TFAutoModelForSequenceClassification.fromPretrained(modelId);

//   // Tokenize the input text
//   const inputs = await tokenizer.encode(text, { return_tensors: 'tf' });

//   // Make predictions
//   const output = await model.predict(inputs);

//   // Interpret the model output to get your predicted ICD-10 code

//   // Replace this with your code to interpret the model's output
//   const predictedICD10 = output; // Example ICD-10 code

//   return predictedICD10;
// }



// exports={
//     classifyTextWithBERT
// }

// import { AutoModel, AutoTokenizer } from '@xenova/transformers';
// import tf from '@tensorflow/tfjs-node';

//  async function classifyTextWithBERT(text) {
//   const modelId = 'bert-base-uncased'; // Replace with the BERT model you want to use

//   const tokenizer = AutoTokenizer.fromPretrained(modelId);
//   const model = await AutoModel.fromPretrained(modelId);

//   // Tokenize the input text
//   const inputs = await tokenizer.encode(text, { return_tensors: 'tf' });

//   // Make predictions
//   const output = await model.predict(inputs);

//   // Interpret the model output to get your predicted ICD-10 code

//   // Replace this with your code to interpret the model's output
//   const predictedICD10 = output; // Example ICD-10 code

//   return predictedICD10;
// }

// export {
//   classifyTextWithBERT
// };

import { AutoModel, AutoTokenizer } from '@xenova/transformers';
import tf from '@tensorflow/tfjs-node';

async function classifyTextWithBERT(text) {
  const modelId = 'bert-base-uncased'; // Replace with the BERT model you want to use

  // Load the tokenizer
  const tokenizer = await AutoTokenizer.fromPretrained(modelId);

  // Load the model
  const model = await AutoModel.fromPretrained(modelId);

  // Tokenize the input text
  const inputs = await tokenizer.encode(text);

  // Make predictions
  const output = await model.predict(inputs);

  // Interpret the model output to get your predicted ICD-10 code

  // Replace this with your code to interpret the model's output
  const predictedICD10 = output; // Example ICD-10 code

  return predictedICD10;
}

export {
  classifyTextWithBERT
};


