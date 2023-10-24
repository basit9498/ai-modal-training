const express = require("express");
const { modelRoute } = require("./routes/modal.route");
const {
  modelTraining,
  modelTrainingTensorFlow,
} = require("./helper/aiModalTrain");

const app = express();

const PORT = 5051;

// modelTraining();
modelTrainingTensorFlow();
// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/modal-ai", modelRoute);

app.listen(PORT, () => {
  console.log(`App is listing http://localhost:${PORT}`);
});
