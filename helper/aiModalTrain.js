const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");
const tfn = require("@tensorflow/tfjs-node");
const { jsonIcd10code } = require("../ai_training/json/data-less-1");
const { jsonIcd10codeFull } = require("../ai_training/json/data-full-1");
const { jsonDSBIcd10codeFull } = require("../ai_training/json/data-dsb-1");

let trainModal = null;
let vocabulary = null;
let maxSeqLength = null;
let icdCodes = [];

// version v2
// const modelTrainingTensorFlow = async () => {
//   const filePath = path.resolve(__dirname, "../ai_training/icd10_prc.xlsx");

//   if (fs.existsSync(filePath)) {
//     const workbook = XLSX.readFile(filePath);
//     const sheetName = workbook.SheetNames[0];
//     // const dataFromExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
//     // const data = dataFromExcel.map((entry) => ({
//     //   icdCode: entry.icdCode, // Ensure this matches your expected format
//     //   description: entry.description, // Process the description as needed
//     // }));
//     // const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
//     // const data = jsonIcd10code;
//     const data = jsonDSBIcd10codeFull;
//     // const data = jsonIcd10codeFull;

//     // const data = [
//     //   {
//     //     description: "Cholera due to Vibrio cholerae 01, biovar cholerae",
//     //     icdCode: "A000",
//     //   },
//     //   {
//     //     description: "Cholera due to Vibrio cholerae 01, biovar eltor",
//     //     icdCode: "A001",
//     //   },
//     //   { description: "Cholera, unspecified", icdCode: "A009" },
//     //   { description: "Typhoid fever, unspecified", icdCode: "A0100" },
//     //   { description: "Typhoid meningitis", icdCode: "A0101" },
//     //   { description: "Other specified acute viral hepatitis", icdCode: "B178" },
//     //   { description: "Acute hepatitis E", icdCode: "B172" },
//     //   {
//     //     description: "Malignant neoplasm of commissure of lip, unspecified",
//     //     icdCode: "C006",
//     //   },
//     //   {
//     //     description: "Malignant neoplasm of overlapping sites of lip",
//     //     icdCode: "C008",
//     //   },
//     //   {
//     //     description: "   Malignant neoplasm of lip, unspecified",
//     //     icdCode: "C009",
//     //   },
//     // ];

//     console.log("data", data);

//     const descriptions = data.map((entry) => entry.description.toLowerCase());
//     // const icdCodes = data.map((entry) => entry.icdCode);
//     icdCodes = data.map((entry) => entry.icdCode);

//     console.log("descriptions", descriptions);
//     console.log("icdCodes", icdCodes);

//     vocabulary = Array.from(new Set(descriptions.join(" ").split(" ")));

//     const sequences = descriptions.map((description) => {
//       const tokens = description.split(" ");
//       return tokens.map((token) => vocabulary.indexOf(token));
//     });

//     maxSeqLength = Math.max(...sequences.map((seq) => seq.length));
//     const paddedSequences = sequences.map((seq) => {
//       while (seq.length < maxSeqLength) {
//         seq.push(0); // Pad with zeros
//       }
//       return seq;
//     });

//     // Create input features and labels
//     const inputFeatures = tfn.tensor(paddedSequences);

//     // Encode ICD-10 codes using one-hot encoding
//     const labels = tfn.tensor(
//       icdCodes.map((code) => {
//         const label = new Array(icdCodes.length).fill(0);
//         const index = icdCodes.indexOf(code);
//         label[index] = 1;
//         return label;
//       })
//     );

//     console.log("Input Features Shape:", inputFeatures.shape);
//     console.log("Labels Shape:", labels.shape);

//     // Create a simple neural network model
//     const model = tfn.sequential();
//     model.add(
//       tfn.layers.embedding({
//         inputDim: vocabulary.length,
//         outputDim: 32,
//         inputLength: maxSeqLength,
//       })
//     );
//     model.add(tfn.layers.flatten());
//     model.add(tfn.layers.dense({ units: 64, activation: "relu" }));
//     model.add(
//       tfn.layers.dense({ units: icdCodes.length, activation: "softmax" })
//     );

//     // Compile the model
//     model.compile({
//       optimizer: tfn.train.adam(),
//       loss: "categoricalCrossentropy", // Change loss function
//       metrics: ["accuracy"],
//     });
//     model.summary();
//     trainModal = model;
//     try {
//       // Train the model
//       await model.fit(inputFeatures, labels, { epochs: 100, batchSize: 1 });
//       console.log("Model training completed successfully.");

//       const history = await model.evaluate(inputFeatures, labels);
//       const accuracyTensor = history[1]; // Assuming accuracy is the second metric
//       const accuracy = accuracyTensor.dataSync()[0];
//       console.log("Final Accuracy: " + accuracy);

//       // You can now proceed to make predictions with the trained model.
//       const testDescription = "cute hepatitis"; // Replace with your test description

//       // Tokenize the test description and pad it to match the input sequence length
//       // const testTokens = testDescription.split(" ");
//       // const testSequence = testTokens.map((token) => {
//       //   const index = vocabulary.indexOf(token);
//       //   return index !== -1 ? index : 0; // Use 0 for out-of-vocabulary words
//       // });

//       // while (testSequence.length < maxSeqLength) {
//       //   testSequence.push(0); // Pad with zeros
//       // }

//       const testTokens = testDescription.split(" ");
//       const testSequence = testTokens.slice(0, maxSeqLength).map((token) => {
//         const index = vocabulary.indexOf(token);
//         return index !== -1 ? index : 0;
//       });

//       while (testSequence.length < maxSeqLength) {
//         testSequence.push(0); // Pad with zeros
//       }

//       // Make a prediction using the trained model
//       const testInputFeatures = tfn.tensor([testSequence]);

//       const prediction = model.predict(testInputFeatures);

//       // Decode the prediction to get the full ICD-10 code
//       const predictedCodeIndex = prediction.argMax(1).dataSync()[0];
//       const predictedFullIcdCode = icdCodes[predictedCodeIndex];

//       console.log("predictedCodeIndex", predictedCodeIndex);
//       console.log("Predicted ICD-10 Code:", predictedFullIcdCode);
//     } catch (error) {
//       console.error("Training failed:", error);
//     }
//   } else {
//     console.error("The file does not exist at the specified path.");
//   }
// };

// version v3 improve the performance
// async function loadWord2VecModel() {
//   const modelUrl =
//     "https://tfhub.dev/tensorflow/tfjs-model/word2vec/1/default/1";
//   const model = await tfn.loadLayersModel(modelUrl);
//   return model;
// }

const modelTrainingTensorFlow = async () => {
  const filePath = path.resolve(__dirname, "../ai_training/icd10_prc.xlsx");

  if (fs.existsSync(filePath)) {
    // const data = [
    //   {
    //     description: "Cholera due to Vibrio cholerae 01, biovar cholerae",
    //     icdCode: "A000",
    //   },
    //   {
    //     description: "Cholera due to Vibrio cholerae 01, biovar eltor",
    //     icdCode: "A001",
    //   },
    //   { description: "Cholera, unspecified", icdCode: "A009" },
    //   { description: "Typhoid fever, unspecified", icdCode: "A0100" },
    //   { description: "Typhoid meningitis", icdCode: "A0101" },
    //   { description: "Other specified acute viral hepatitis", icdCode: "B178" },
    //   { description: "Acute hepatitis E", icdCode: "B172" },
    //   {
    //     description: "Malignant neoplasm of commissure of lip, unspecified",
    //     icdCode: "C006",
    //   },
    //   {
    //     description: "Malignant neoplasm of overlapping sites of lip",
    //     icdCode: "C008",
    //   },
    //   {
    //     description: "   Malignant neoplasm of lip, unspecified",
    //     icdCode: "C009",
    //   },
    // ];
    // const data = jsonIcd10code;
    const data = jsonDSBIcd10codeFull;
    // const data = jsonIcd10codeFull;
    const augmentedData = [];
    data.forEach((entry) => {
      const description = entry.description;
      const tokens = description.split(" ");
      for (let i = 0; i < tokens.length; i++) {
        const variation = tokens.slice(0, i + 1).join(" ");
        augmentedData.push({ description: variation, icdCode: entry.icdCode });
      }
    });

    console.log("augmentedData ", augmentedData);

    // Combine the original data with augmented data
    const combinedData = data.concat(augmentedData);

    const descriptions = combinedData.map((entry) =>
      entry.description.toLowerCase()
    );

    icdCodes = combinedData.map((entry) => entry.icdCode);

    vocabulary = Array.from(new Set(descriptions.join(" ").split(" ")));

    const sequences = descriptions.map((description) => {
      const tokens = description.split(" ");
      return tokens.map((token) => vocabulary.indexOf(token));
    });

    maxSeqLength = Math.max(...sequences.map((seq) => seq.length));
    const paddedSequences = sequences.map((seq) => {
      while (seq.length < maxSeqLength) {
        seq.push(0);
      }
      return seq;
    });

    // Load pre-trained Word2Vec model
    // const word2vecModel = await loadWord2VecModel();
    // Create input features and labels
    const inputFeatures = tfn.tensor(paddedSequences);
    const labels = tfn.tensor(
      icdCodes.map((code) => {
        const label = new Array(icdCodes.length).fill(0);
        const index = icdCodes.indexOf(code);
        label[index] = 1;
        return label;
      })
    );
    // const labels = tfn.tensor(icdCodes.map((code) => icdCodes.indexOf(code)));

    // Create a simple neural network model
    // Replace the embedding layer with pre-trained Word2Vec embeddings
    const model = tfn.sequential();
    // model.add(word2vecModel); // Use pre-trained Word2Vec embeddings
    // Specify inputShape in the first layer
    model.add(
      tfn.layers.embedding({
        inputDim: vocabulary.length,
        outputDim: 100, // Adjust embedding dimension as needed
        inputLength: maxSeqLength,
        inputShape: [maxSeqLength], // Specify input shape
      })
    );
    model.add(tfn.layers.flatten());
    model.add(tfn.layers.dense({ units: 64, activation: "relu" }));
    model.add(
      tfn.layers.dense({ units: icdCodes.length, activation: "softmax" })
    );
    // Compile the model
    model.compile({
      optimizer: tfn.train.adam(),
      loss: "categoricalCrossentropy",
      metrics: ["accuracy"],
    });

    console.log("Model Summary:");
    model.summary();

    trainModal = model;
    try {
      // Train the model
      await model.fit(inputFeatures, labels, { epochs: 100, batchSize: 1 });
      console.log("Model training completed successfully.");

      const history = await model.evaluate(inputFeatures, labels);
      const accuracyTensor = history[1];
      const accuracy = accuracyTensor.dataSync()[0];
      console.log("Final Accuracy: " + accuracy);

      // You can now proceed to make predictions with the trained model.
      const testDescription = "Malignant neoplasm of lip";

      // Tokenize the test description and pad it to match the input sequence length
      // const testTokens = testDescription.split(" ");
      // const testSequence = testTokens.map((token) => {
      //   const index = vocabulary.indexOf(token);
      //   return index !== -1 ? index : 0; // Use 0 for out-of-vocabulary words
      // });

      // while (testSequence.length < maxSeqLength) {
      //   testSequence.push(0); // Pad with zeros
      // }

      const testTokens = testDescription.split(" ");
      const testSequence = testTokens.slice(0, maxSeqLength).map((token) => {
        const index = vocabulary.indexOf(token);
        return index !== -1 ? index : 0;
      });

      while (testSequence.length < maxSeqLength) {
        testSequence.push(0);
      }

      const testInputFeatures = tfn.tensor([testSequence]);

      const prediction = model.predict(testInputFeatures);

      const predictedCodeIndex = prediction.argMax(1).dataSync()[0];
      const predictedFullIcdCode = icdCodes[predictedCodeIndex];

      console.log("Predicted ICD-10 Code:", predictedFullIcdCode);
    } catch (error) {
      console.error("Training failed:", error);
    }
  } else {
    console.error("The file does not exist at the specified path.");
  }
};

const testPredictions = async (description) => {
  let result = "";
  if (trainModal !== null) {
    try {
      // You can now proceed to make predictions with the trained model.
      const testDescription = description; // Replace with your test description

      // Tokenize the test description and pad it to match the input sequence length
      const testTokens = testDescription.split(" ");
      const testSequence = testTokens.map((token) => {
        const index = vocabulary.indexOf(token);
        return index !== -1 ? index : 0; // Use 0 for out-of-vocabulary words
      });

      while (testSequence.length < maxSeqLength) {
        testSequence.push(0); // Pad with zeros
      }

      // Make a prediction using the trained model
      const testInputFeatures = tfn.tensor([testSequence]);
      const prediction = trainModal.predict(testInputFeatures);

      // // Decode the prediction to get the ICD-10 code
      // const predictedCodeIndex = prediction.argMax(1).dataSync()[0];
      // console.log("prediction", predictedCodeIndex);
      // const predictedCode = String.fromCharCode(
      //   "A".charCodeAt(0) + predictedCodeIndex
      // );

      // Decode the prediction to get the full ICD-10 code
      const predictedCodeIndex = prediction.argMax(1).dataSync()[0];
      const predictedFullIcdCode = icdCodes[predictedCodeIndex];

      console.log("predictedCodeIndex", predictedCodeIndex);
      console.log("Predicted ICD-10 Code:", predictedFullIcdCode);
      return (result = `"Predicted ICD-10 Code:", ${predictedFullIcdCode}`);
    } catch (error) {
      console.error("Training failed:", error);
      return (result = `"Training failed:", ${error}`);
    }
  } else {
    console.error("Modal is not trained failed");
    return (result = "Modal is not trained failed");
  }
};

module.exports = {
  modelTrainingTensorFlow,
  testPredictions,
};
