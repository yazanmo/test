const sellerModel = require("../../db/models/user");


const getAllSeller = (req, res) => {
  sellerModel
    .find({ role: "seller" })
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
};

const getSellerByName = (req, res) => {
  const fullName = req.query.fullName;
  if (!fullName) return res.status(404).json("not found");

  sellerModel
    .find({ fullName })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  getAllSeller,getSellerByName,
};
