const { testPredictions } = require("../helper/aiModalTrain");

const modelGetResult = async (req, res, next) => {
  try {
    const { description } = req.body;
    if (!description) {
      res.status(404).json({
        message: "No description ",
      });
    }
    const result = await testPredictions(description);
    res.status(200).json({
      message: "success",
      result,
    });
  } catch (error) {
    res.status(404).json({
      message: "Fail",
    });
  }
};

module.exports = {
  modelGetResult,
};
