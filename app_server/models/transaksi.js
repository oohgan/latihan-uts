const mongoose = require("mongoose");
const {Schema} = mongoose;

const transaksiShema = new Schema({
    produk_id: ObjectId,
    pengguna_id: ObjectId,
    jumlah: Number,
    total_harga: Number,
    tanggal_transaksi: Date 
});

module.exports("Transaksi", transaksiShema);