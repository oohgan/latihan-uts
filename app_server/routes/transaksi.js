var express = require("express");
var router = express.Router();

const transasksiController = require("../controllers/transaksi");
router.get("/", transasksiController.index);
router.post("/insert", transasksiController.insert);

module.exports = router;