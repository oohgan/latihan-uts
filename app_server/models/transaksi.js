const mongoose = require('mongoose');
const { Schema } = mongoose;

const transaksiShema = new Schema({
  produk_id: Schema.Types.ObjectId,
  pengguna_id: Schema.Types.ObjectId ,
  jumlah: Number,
  total_harga: Number,
  tanggal_transaksi: Date,
});

mongoose.model('Transaksi', transaksiShema);
