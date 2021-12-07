const DealModel = require("../models/Deals.model");

const saveDeal = async (req, res) => {
    try {
        const { name, unitPrice, discountPrice, image } = req.body;

        await new DealModel({
            name,
            unitPrice,
            discountPrice,
            image,
        }).save();
        return res.status(201).json({
            response: "deal added successfully",
            success: true
        })
    } catch (err) {
        return res.status(404).json({
            response: "something went wrong",
            err,
            success: false
        })
    }
}

const getDealById = async (req, res) => {
  try {
    const { id } = req.params;
    const deal = await DealModel.findById(id);
      
      return res.status(200).json({
        data: deal,
        success: true,
    });
  } catch (err) {
    return res.status(404).json({
      response: "something went wrong",
      err,
      success: false,
    });
  }
};

const getDeal = async (req, res) => {
    try {
      
    const deal = await DealModel.find();

    return res.status(200).json({
      data: deal,
      success: true,
    });
  } catch (err) {
    return res.status(404).json({
      response: "something went wrong",
      err,
      success: false,
    });
  }
};

const updateDeal = async (req, res) => {
  try {
      const { name, unitPrice, discountPrice, image } = req.body;
      
      const { id } = req.params;

      const updateDeal = await DealModel.findByIdAndUpdate(id, {
        name,
        unitPrice,
        discountPrice,
        image,
      },
      {
          new: true
      }
      );

    return res.status(200).json({
        data: updateDeal,
        response: "deal updated successfully",
        success: true,
    });
  } catch (err) {
    return res.status(404).json({
      response: "something went wrong",
      err,
      success: false,
    });
  }
};

const deleteDeal = async (req, res) => {
  try {
    const { id } = req.params;
    await DealModel.findByIdAndRemove(id);

    return res.status(200).json({
      data: null,
      response: "deleted successfully",
      success: true,
    });
  } catch (err) {
    return res.status(505).json({
      response: "server error",
      err,
      success: false,
    });
  }
};

module.exports = {
  saveDeal,
  getDealById,
  getDeal,
  updateDeal,
  deleteDeal,
};