import UserData from "../Models/dataModel.js";

export const data = async (req, res) => {
  try {
    const Values = req.body;
    const newData = new UserData(Values);
    if (newData) {
      await newData.save();
    }
    res.status(201).send(Values);
  } catch (error) {
    console.log(error);
  }
};
