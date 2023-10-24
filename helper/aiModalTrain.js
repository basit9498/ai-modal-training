const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");
const tfn = require("@tensorflow/tfjs-node");

let trainModal = null;
let vocabulary = null;
let maxSeqLength = null;
let icdCodes = [];

// version v2 is
const modelTrainingTensorFlow = async () => {
  const filePath = path.resolve(
    __dirname,
    "../ai_training/ICDCodeSet_full.csv"
  );

  if (fs.existsSync(filePath)) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // console.log(data);
    const descriptions = data.map((entry) => entry.description.toLowerCase());
    // const icdCodes = data.map((entry) => entry.icdCode);
    icdCodes = data.map((entry) => entry.icdCode);

    // console.log("descriptions", descriptions);
    // console.log("icdCodes", icdCodes);

    vocabulary = Array.from(new Set(descriptions.join(" ").split(" ")));

    const sequences = descriptions.map((description) => {
      const tokens = description.split(" ");
      return tokens.map((token) => vocabulary.indexOf(token));
    });

    maxSeqLength = Math.max(...sequences.map((seq) => seq.length));
    const paddedSequences = sequences.map((seq) => {
      while (seq.length < maxSeqLength) {
        seq.push(0); // Pad with zeros
      }
      return seq;
    });

    // Create input features and labels
    const inputFeatures = tfn.tensor(paddedSequences);

    // Encode ICD-10 codes using one-hot encoding
    const labels = tfn.tensor(
      icdCodes.map((code) => {
        const label = new Array(icdCodes.length).fill(0);
        const index = icdCodes.indexOf(code);
        label[index] = 1;
        return label;
      })
    );

    // Create a simple neural network model
    const model = tfn.sequential();
    model.add(
      tfn.layers.embedding({
        inputDim: vocabulary.length,
        outputDim: 32,
        inputLength: maxSeqLength,
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
      loss: "categoricalCrossentropy", // Change loss function
      metrics: ["accuracy"],
    });
    model.summary();
    trainModal = model;
    try {
      // Train the model
      await model.fit(inputFeatures, labels, { epochs: 100, batchSize: 1 });
      console.log("Model training completed successfully.");

      // You can now proceed to make predictions with the trained model.
      const testDescription = "cute hepatitis"; // Replace with your test description

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
      const prediction = model.predict(testInputFeatures);

      // Decode the prediction to get the full ICD-10 code
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

// version v3 is for batch
// 3.1
// const modelTrainingTensorFlow = async () => {
//   const filePath = path.resolve(
//     __dirname,
//     "../ai_training/ICDCodeSet_full.csv"
//   );

//   if (fs.existsSync(filePath)) {
//     const workbook = XLSX.readFile(filePath);
//     const sheetName = workbook.SheetNames[0];
//     const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

//     // Extract descriptions and ICD codes
//     const descriptions = data.map((entry) => entry.description.toLowerCase());
//     const icdCodes = data.map((entry) => entry.icdCode);

//     // Create vocabulary
//     const vocabulary = Array.from(new Set(descriptions.join(" ").split(" ")));

//     // Tokenize and pad sequences
//     const sequences = descriptions.map((description) => {
//       const tokens = description.split(" ");
//       return tokens.map((token) => vocabulary.indexOf(token));
//     });

//     const maxSeqLength = Math.max(...sequences.map((seq) => seq.length));
//     const paddedSequences = sequences.map((seq) => {
//       while (seq.length < maxSeqLength) {
//         seq.push(0); // Pad with zeros
//       }
//       return seq;
//     });

//     // Encode ICD-10 codes using one-hot encoding
//     const labelMap = new Map(icdCodes.map((code, index) => [code, index]));
//     const numClasses = icdCodes.length;
//     const labels = data.map((entry) => {
//       const label = new Array(numClasses).fill(0);
//       const index = labelMap.get(entry.icdCode);
//       label[index] = 1;
//       return label;
//     });

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
//     model.add(tfn.layers.dense({ units: numClasses, activation: "softmax" }));

//     // Compile the model
//     model.compile({
//       optimizer: tfn.train.adam(),
//       loss: "categoricalCrossentropy",
//       metrics: ["accuracy"],
//     });
//     model.summary();
//     trainModal = model;

//     try {
//       // Train the model
//       await model.fit(tfn.tensor(paddedSequences), tfn.tensor(labels), {
//         epochs: 100,
//         batchSize: 8, // Use an appropriate batch size
//       });
//       console.log("Model training completed successfully.");

//       // You can now proceed to make predictions with the trained model.
//       const testDescription = "cute hepatitis"; // Replace with your test description

//       // Tokenize the test description and pad it to match the input sequence length
//       const testTokens = testDescription.split(" ");
//       const testSequence = testTokens.map((token) => {
//         const index = vocabulary.indexOf(token);
//         return index !== -1 ? index : 0; // Use 0 for out-of-vocabulary words
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

//       console.log("Predicted ICD-10 Code:", predictedFullIcdCode);
//     } catch (error) {
//       console.error("Training failed:", error);
//     }
//   } else {
//     console.error("The file does not exist at the specified path.");
//   }
// };

// 3.2
// const modelTrainingTensorFlow = async () => {
//   const filePath = path.resolve(
//     __dirname,
//     "../ai_training/ICDCodeSet_full.csv"
//   );

//   if (fs.existsSync(filePath)) {
//     const workbook = XLSX.readFile(filePath);
//     const sheetName = workbook.SheetNames[0];
//     const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

//     // Extract descriptions and ICD codes
//     const descriptions = data.map((entry) => entry.description.toLowerCase());
//     const icdCodes = data.map((entry) => entry.icdCode);

//     // Create vocabulary
//     const vocabulary = Array.from(new Set(descriptions.join(" ").split(" ")));

//     // Calculate maxSeqLength
//     const maxSeqLength = Math.max(
//       ...data.map((entry) => entry.description.split(" ").length)
//     );

//     // Define the batch size and epochs
//     const batchSize = 8; // Adjust this as needed
//     const epochs = 100;

//     // Create a data generator using tf.data
//     const dataGenerator = tfn.data.generator(function* () {
//       for (let i = 0; i < data.length; i += batchSize) {
//         const batchData = data.slice(i, i + batchSize);

//         // Tokenize and pad sequences for the batch
//         const batchSequences = batchData.map((entry) => {
//           const tokens = entry.description.split(" ");
//           return tokens.map((token) => vocabulary.indexOf(token));
//         });

//         const paddedSequences = batchSequences.map((seq) => {
//           while (seq.length < maxSeqLength) {
//             seq.push(0); // Pad with zeros
//           }
//           return seq;
//         });

//         // Encode ICD-10 codes for the batch
//         const batchLabels = batchData.map((entry) => {
//           const label = new Array(icdCodes.length).fill(0);
//           const index = icdCodes.indexOf(entry.icdCode);
//           label[index] = 1;
//           return label;
//         });

//         yield { x: tfn.tensor(paddedSequences), y: tfn.tensor(batchLabels) };
//       }
//     });

//     // Create a simple neural network model
//     const model = tfn.sequential();
//     model.add(
//       tfn.layers.embedding({
//         inputDim: vocabulary.length,
//         outputDim: 32,
//         inputLength: maxSeqLength,
//       })
//     );

//     model.add(tfn.layers.flatten({ inputShape: [maxSeqLength, 32] })); // Specify the inputShape here
//     model.add(tfn.layers.dense({ units: 64, activation: "relu" }));
//     model.add(
//       tfn.layers.dense({ units: icdCodes.length, activation: "softmax" })
//     );

//     // Compile the model
//     model.compile({
//       optimizer: tfn.train.adam(),
//       loss: "categoricalCrossentropy",
//       metrics: ["accuracy"],
//     });
//     model.summary();
//     trainModal = model;

//     try {
//       // Train the model using the data generator
//       for (const batch of dataGenerator) {
//         await model.fit(batch.x, batch.y, { epochs: 1 });
//       }

//       console.log("Model training completed successfully.");

//       // You can now proceed to make predictions with the trained model.
//       const testDescription = "cute hepatitis"; // Replace with your test description

//       // Tokenize the test description and pad it to match the input sequence length
//       const testTokens = testDescription.split(" ");
//       const testSequence = testTokens.map((token) => {
//         const index = vocabulary.indexOf(token);
//         return index !== -1 ? index : 0; // Use 0 for out-of-vocabulary words
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

//       console.log("Predicted ICD-10 Code:", predictedFullIcdCode);
//     } catch (error) {
//       console.error("Training failed:", error);
//     }
//   } else {
//     console.error("The file does not exist at the specified path.");
//   }
// };

// 3.3
// const modelTrainingTensorFlow = async () => {
//   const filePath = path.resolve(
//     __dirname,
//     "../ai_training/ICDCodeSet_full.csv"
//   );

//   if (fs.existsSync(filePath)) {
//     const workbook = XLSX.readFile(filePath);
//     const sheetName = workbook.SheetNames[0];
//     const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

//     // Extract descriptions and ICD codes
//     const descriptions = data.map((entry) => entry.description.toLowerCase());
//     const icdCodes = data.map((entry) => entry.icdCode);

//     // Create vocabulary
//     const vocabulary = Array.from(new Set(descriptions.join(" ").split(" ")));

//     // Calculate maxSeqLength
//     const maxSeqLength = Math.max(
//       ...data.map((entry) => entry.description.split(" ").length)
//     );

//     // Define the batch size and epochs
//     const batchSize = 4; // Adjust this as needed
//     const epochs = 100;

//     // Create empty arrays to store training data
//     const xData = [];
//     const yData = [];

//     // Tokenize, pad sequences, and encode ICD-10 codes
//     for (let i = 0; i < data.length; i += batchSize) {
//       const batchData = data.slice(i, i + batchSize);

//       const batchX = [];
//       const batchY = [];

//       for (const entry of batchData) {
//         const tokens = entry.description.split(" ");
//         const seq = tokens.map((token) => vocabulary.indexOf(token));
//         while (seq.length < maxSeqLength) {
//           seq.push(0); // Pad with zeros
//         }
//         batchX.push(seq);

//         const label = new Array(icdCodes.length).fill(0);
//         const index = icdCodes.indexOf(entry.icdCode);
//         label[index] = 1;
//         batchY.push(label);
//       }

//       xData.push(batchX);
//       yData.push(batchY);
//     }

//     // Combine batch arrays
//     const xTrain = tfn.tensor(xData);
//     const yTrain = tfn.tensor(yData);

//     // Create a simple neural network model
//     const model = tfn.sequential();
//     model.add(
//       tfn.layers.embedding({
//         inputDim: vocabulary.length,
//         outputDim: 32,
//         inputLength: maxSeqLength,
//       })
//     );

//     model.add(tfn.layers.flatten({ inputShape: [maxSeqLength, 32] })); // Specify the inputShape here
//     model.add(tfn.layers.dense({ units: 64, activation: "relu" }));
//     model.add(
//       tfn.layers.dense({ units: icdCodes.length, activation: "softmax" })
//     );

//     // Compile the model
//     model.compile({
//       optimizer: tfn.train.adam(),
//       loss: "categoricalCrossentropy",
//       metrics: ["accuracy"],
//     });
//     model.summary();
//     trainModal = model;

//     try {
//       // Train the model
//       await model.fit(xTrain, yTrain, { epochs: epochs });

//       console.log("Model training completed successfully.");

//       // You can now proceed to make predictions with the trained model.
//       const testDescription = "cute hepatitis"; // Replace with your test description

//       // Tokenize the test description and pad it to match the input sequence length
//       const testTokens = testDescription.split(" ");
//       const testSequence = testTokens.map((token) => {
//         const index = vocabulary.indexOf(token);
//         return index !== -1 ? index : 0; // Use 0 for out-of-vocabulary words
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

//       console.log("Predicted ICD-10 Code:", predictedFullIcdCode);
//     } catch (error) {
//       console.error("Training failed:", error);
//     }
//   } else {
//     console.error("The file does not exist at the specified path.");
//   }
// };

// 3.4
// const modelTrainingTensorFlow = async () => {
//   const filePath = path.resolve(
//     __dirname,
//     "../ai_training/ICDCodeSet_full.csv"
//   );

//   if (fs.existsSync(filePath)) {
//     const workbook = XLSX.readFile(filePath);
//     const sheetName = workbook.SheetNames[0];
//     const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

//     // Extract descriptions and ICD codes
//     const descriptions = data.map((entry) => entry.description.toLowerCase());
//     const icdCodes = data.map((entry) => entry.icdCode);

//     // Create vocabulary
//     const vocabulary = Array.from(new Set(descriptions.join(" ").split(" ")));

//     // Calculate maxSeqLength
//     const maxSeqLength = Math.max(
//       ...data.map((entry) => entry.description.split(" ").length)
//     );

//     // Define the batch size and epochs
//     const batchSize = 4; // Adjust this as needed
//     const epochs = 100;

//     // Create empty arrays to store training data
//     const xData = [];
//     const yData = [];

//     // Tokenize, pad sequences, and encode ICD-10 codes
//     for (let i = 0; i < data.length; i += batchSize) {
//       const batchData = data.slice(i, i + batchSize);

//       const batchX = [];
//       const batchY = [];

//       for (const entry of batchData) {
//         const tokens = entry.description.split(" ");
//         const seq = tokens.map((token) => vocabulary.indexOf(token));
//         while (seq.length < maxSeqLength) {
//           seq.push(0); // Pad with zeros
//         }
//         batchX.push(seq);

//         const label = new Array(icdCodes.length).fill(0);
//         const index = icdCodes.indexOf(entry.icdCode);
//         label[index] = 1;
//         batchY.push(label);
//       }

//       xData.push(batchX);
//       yData.push(batchY);
//     }

//     // Combine batch arrays
//     const xTrain = tfn.tensor(xData);
//     const yTrain = tfn.tensor(yData);

//     // Create a simple neural network model
//     const model = tfn.sequential();
//     model.add(
//       tfn.layers.embedding({
//         inputDim: vocabulary.length,
//         outputDim: 32,
//         inputLength: maxSeqLength,
//       })
//     );

//     model.add(tfn.layers.flatten({ inputShape: [maxSeqLength, 32] })); // Specify the inputShape here
//     model.add(tfn.layers.dense({ units: 64, activation: "relu" }));
//     model.add(
//       tfn.layers.dense({ units: icdCodes.length, activation: "softmax" })
//     );

//     // Compile the model
//     model.compile({
//       optimizer: tfn.train.adam(),
//       loss: "categoricalCrossentropy",
//       metrics: ["accuracy"],
//     });

//     model.summary();

//     try {
//       // Train the model
//       await model.fit(xTrain, yTrain, { epochs: epochs });

//       console.log("Model training completed successfully.");

//       // You can now proceed to make predictions with the trained model.
//       const testDescription = "cute hepatitis"; // Replace with your test description

//       // Tokenize the test description and pad it to match the input sequence length
//       const testTokens = testDescription.split(" ");
//       const testSequence = testTokens.map((token) => {
//         const index = vocabulary.indexOf(token);
//         return index !== -1 ? index : 0; // Use 0 for out-of-vocabulary words
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

//       console.log("Predicted ICD-10 Code:", predictedFullIcdCode);
//     } catch (error) {
//       console.error("Training failed:", error);
//     }
//   } else {
//     console.error("The file does not exist at the specified path.");
//   }
// };

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
