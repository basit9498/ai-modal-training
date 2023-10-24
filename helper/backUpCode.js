const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");
const brain = require("brain.js");
const tf = require("@tensorflow/tfjs-node");
const natural = require("natural");
const tfn = require("@tensorflow/tfjs-node");

// const modelTraining = () => {
//   const filePath = path.resolve(__dirname, "../ai_training/ICDCodeSet.csv");

//   if (fs.existsSync(filePath)) {
//     const workbook = XLSX.readFile(filePath);

//     const sheetName = workbook.SheetNames[0];

//     const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

//     // Create training data
//     const trainingData = data.map((row) => ({
//       input: row["Description"],
//       output: row["ICDCode"],
//     }));

//     // Create and train the neural network
//     const net = new brain.recurrent.LSTM();
//     console.log("before train");
//     // net.train(trainingData, {
//     //   iterations: 2000, // Adjust the number of iterations as needed
//     //   errorThresh: 0.005, // Adjust the error threshold as needed
//     // });
//     net.train(trainingData, {
//       iterations: 20, // Adjust the number of iterations as needed
//       errorThresh: 0.005, // Adjust the error threshold as needed
//       callback: (info) => {
//         if (info.iterations % 100 === 0) {
//           console.log(`Iterations: ${info.iterations}, Error: ${info.error}`);
//         }
//       },
//     });
//     console.log("after train");

//     // Now you can use the trained network to make predictions
//     const inputDescription =
//       " This morning I have a 48-year-old gentleman who is coming in with complaints of chest pain he states that the chest pain is in the center of his chest and radiates down his left arm and into his left jaw he missed having some shortness of breath it's getting worse the more he is active it gets better when he's resting he's tried taking 10 to 20 tablets of 400 mg of ibuprofen without any relief although he does state sometimes when he does that it makes his abdominal Pain More aggravated he states he has tried Tylenol as well that has not at that has not helped patient states he is also having some fevers he is also having some blood in his stool or exam the patient is diaphoretic he is tachycardic he is not well appearing on he has an S3 Gallup his lungs show crackles of bilateral bases he has 4+ pitting edema bilateral lower extremity he has 1+ dorsalis pedis pulse on the right and 2+ on the left plan this gentleman appears to be having some issues with his heart as well as his abdomen I believe acute coronary syndrome or peptic ulcer or perforation are to be considered I'm going to order some bloodwork I'm going to get an MG I'm going to get some troponins I'm going to send him to the emergency department should any of these results come back abnormal follow up plan pending initial diagnostics for the recommendations to follow";
//     const predictedCode = net.run(inputDescription);

//     console.log(`Predicted ICD-10 Code: ${predictedCode}`);
//   } else {
//     console.error("The file does not exist at the specified path.");
//   }
// };

const modelTrainingTensorFlow = async () => {
  const filePath = path.resolve(__dirname, "../ai_training/ICDCodeSet.csv");
  if (fs.existsSync(filePath)) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    // split the data
    const descriptions = data.map((entry) => entry.Description);
    const icdCodes = data.map((entry) => entry.ICDCode);

    // // Sample data
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
    // ];

    // // Preprocess data
    // const descriptions = data.map((entry) => entry.description.toLowerCase());
    // const icdCodes = data.map((entry) => entry.icdCode);

    // Tokenize and create a vocabulary
    const vocabulary = Array.from(new Set(descriptions.join(" ").split(" ")));

    // Convert text to sequences
    const sequences = descriptions.map((description) => {
      const tokens = description.split(" ");
      return tokens.map((token) => vocabulary.indexOf(token));
    });

    // Ensure all sequences have the same length (pad if necessary)
    const maxSeqLength = Math.max(...sequences.map((seq) => seq.length));
    const paddedSequences = sequences.map((seq) => {
      while (seq.length < maxSeqLength) {
        seq.push(0); // Pad with zeros
      }
      return seq;
    });

    // Create input features and labels
    const inputFeatures = tfn.tensor(paddedSequences);
    const labels = tfn.tensor(
      icdCodes.map((code) => code.charCodeAt(0) - "A".charCodeAt(0))
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
      loss: "sparseCategoricalCrossentropy",
      metrics: ["accuracy"],
    });
    model.summary();

    try {
      // Train the model
      await model.fit(inputFeatures, labels, { epochs: 100, batchSize: 1 });
      console.log("Model training completed successfully.");

      // You can now proceed to make predictions with the trained model.
      const testDescription = "Cholera due to Vibrio cholerae 01, biovar eltor"; // Replace with your test description

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

      // Decode the prediction to get the ICD-10 code
      const predictedCodeIndex = prediction.argMax(1).dataSync()[0];
      const predictedCode = String.fromCharCode(
        "A".charCodeAt(0) + predictedCodeIndex
      );

      console.log("Predicted ICD-10 Code:", predictedCode);
    } catch (error) {
      console.error("Training failed:", error);
    }
  } else {
    console.error("The file does not exist at the specified path.");
  }
};

module.exports = {
  // modelTraining,
  modelTrainingTensorFlow,
};

// Versions and it's detail

// v1 only display the codes not full code

// const modelTrainingTensorFlow = async () => {
//   const filePath = path.resolve(
//     __dirname,
//     "../ai_training/ICDCodeSet_less.csv"
//   );
//   if (fs.existsSync(filePath)) {
//     const workbook = XLSX.readFile(filePath);
//     const sheetName = workbook.SheetNames[0];
//     // const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

//     // // Sample data
//     const data = [
//       {
//         description: "Cholera due to Vibrio cholerae 01, biovar cholerae",
//         icdCode: "A000",
//       },
//       {
//         description: "Cholera due to Vibrio cholerae 01, biovar eltor",
//         icdCode: "A001",
//       },
//       { description: "Cholera, unspecified", icdCode: "A009" },
//       { description: "Typhoid fever, unspecified", icdCode: "A0100" },
//       { description: "Typhoid meningitis", icdCode: "A0101" },
//       { description: "Other specified acute viral hepatitis", icdCode: "B178" },
//       { description: "Acute hepatitis E", icdCode: "B172" },
//       {
//         description: "Malignant neoplasm of commissure of lip, unspecified",
//         icdCode: "C006",
//       },
//       {
//         description: "Malignant neoplasm of overlapping sites of lip",
//         icdCode: "C008",
//       },
//       {
//         description: "   Malignant neoplasm of lip, unspecified",
//         icdCode: "C009",
//       },
//     ];

//     // Preprocess data
//     const descriptions = data.map((entry) => entry.description.toLowerCase());
//     const icdCodes = data.map((entry) => entry.icdCode);

//     // Tokenize and create a vocabulary
//     // const vocabulary = Array.from(new Set(descriptions.join(" ").split(" ")));
//     vocabulary = Array.from(new Set(descriptions.join(" ").split(" ")));

//     // Convert text to sequences
//     const sequences = descriptions.map((description) => {
//       const tokens = description.split(" ");
//       return tokens.map((token) => vocabulary.indexOf(token));
//     });

//     // Ensure all sequences have the same length (pad if necessary)
//     // const maxSeqLength = Math.max(...sequences.map((seq) => seq.length));
//     maxSeqLength = Math.max(...sequences.map((seq) => seq.length));
//     const paddedSequences = sequences.map((seq) => {
//       while (seq.length < maxSeqLength) {
//         seq.push(0); // Pad with zeros
//       }
//       return seq;
//     });

//     // Create input features and labels
//     const inputFeatures = tfn.tensor(paddedSequences);
//     const labels = tfn.tensor(
//       icdCodes.map((code) => code.charCodeAt(0) - "A".charCodeAt(0))
//     );

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
//       loss: "sparseCategoricalCrossentropy",
//       metrics: ["accuracy"],
//     });
//     model.summary();

//     trainModal = model;

//     // try {
//     //   // Train the model
//     //   await model.fit(inputFeatures, labels, { epochs: 100, batchSize: 1 });
//     //   console.log("Model training completed successfully.");

//     //   // You can now proceed to make predictions with the trained model.
//     //   const testDescription = "Cholera due to Vibrio cholerae 01, biovar eltor"; // Replace with your test description

//     //   // Tokenize the test description and pad it to match the input sequence length
//     //   const testTokens = testDescription.split(" ");
//     //   const testSequence = testTokens.map((token) => {
//     //     const index = vocabulary.indexOf(token);
//     //     return index !== -1 ? index : 0; // Use 0 for out-of-vocabulary words
//     //   });

//     //   while (testSequence.length < maxSeqLength) {
//     //     testSequence.push(0); // Pad with zeros
//     //   }

//     //   // Make a prediction using the trained model
//     //   const testInputFeatures = tfn.tensor([testSequence]);
//     //   const prediction = model.predict(testInputFeatures);

//     //   // Decode the prediction to get the ICD-10 code
//     //   const predictedCodeIndex = prediction.argMax(1).dataSync()[0];
//     //   const predictedCode = String.fromCharCode(
//     //     "A".charCodeAt(0) + predictedCodeIndex
//     //   );

//     //   console.log("predictedCodeIndex", predictedCodeIndex);
//     //   console.log("Predicted ICD-10 Code:", predictedCode);
//     // } catch (error) {
//     //   console.error("Training failed:", error);
//     // }
//     try {
//       // Train the model
//       await model.fit(inputFeatures, labels, { epochs: 100, batchSize: 1 });
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
//       const fullIcdCode = icdCodes[predictedCodeIndex];
//       console.log("predictedCodeIndex", predictedCodeIndex);

//       console.log("Predicted ICD-10 Code:", fullIcdCode);
//     } catch (error) {
//       console.error("Training failed:", error);
//     }
//   } else {
//     console.error("The file does not exist at the specified path.");
//   }
// };

// version v2 is Full code but not working for large data set
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
// const modelTrainingTensorFlow = async () => {
//   const filePath = path.resolve(
//     __dirname,
//     "../ai_training/ICDCodeSet_full.csv"
//   );

//   if (fs.existsSync(filePath)) {
//     const workbook = XLSX.readFile(filePath);
//     const sheetName = workbook.SheetNames[0];
//     const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

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

//     // console.log(data);
//     const descriptions = data.map((entry) => entry.description.toLowerCase());
//     // const icdCodes = data.map((entry) => entry.icdCode);
//     icdCodes = data.map((entry) => entry.icdCode);

//     // console.log("descriptions", descriptions);
//     // console.log("icdCodes", icdCodes);

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
