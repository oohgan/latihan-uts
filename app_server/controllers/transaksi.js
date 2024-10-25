const mongoose = require("mongoose");
const Transaksi = mongoose.model("Transaksi");

const index = (req, res, next) => {
  Transaksi.find({}, { __v: 0 })
    .then((tri) => {
      const responseMessage = {
        code: 200,
        success: true,
        message: "Successfull",
        data: tri,
      };
      res.status(200).json(responseMessage);
    })
    .catch((e) => {
      const responseMessage = {
        code: 400,
        success: false,
        message: "Bad request",
      };
      res.status(400).json(responseMessage);
    });
};

const insert = (req, res, next) => {
  const tri = new Transaksi({
    produk_id: req.body.produk_id,
    pengguna_id: req.body.pengguna_id,
    jumlah: req.body.jumlah,
    total_harga: req.body.total_harga,
    tanggal_transaksi: req.body.tanggal_transaksi, 
  });

  tri
    .save()
    .then((result) => {
      const responseMessage = {
        code: 200,
        success: true,
        message: "Successfull",
        data: result,
      };
      res.status(200).json(responseMessage);
    })
    .catch((e) => {
      const responseMessage = {
        code: 400,
        success: true,
        message: "Bad request",
      };
      res.status(400).json(responseMessage);
    });
};

module.exports = { index, insert };