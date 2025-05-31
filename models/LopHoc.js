// models/LopHoc.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LopHocSchema = new Schema({
  tenLop: { type: String, required: true },
  maLop: { type: String, required: true, unique: true },
  maGiaoVien: { type: mongoose.Schema.Types.ObjectId, ref: 'NguoiDung' }, // liên kết đến tài khoản giáo viên
  namHoc: String,
});

var LopHocmModel = mongoose.model('LopHoc', LopHocSchema);
module.exports = LopHocmModel;
