const express = require("express");

const sellerRouter = express.Router();

const {
    getAllSeller , getSellerByName
} = require("../controllers/seller");

sellerRouter.get("/seller", getAllSeller)
sellerRouter.get("/seller/search",  getSellerByName)




module.exports = sellerRouter;