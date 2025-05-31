var express = require('express');
var router = express.Router();
var LopHoc = require('../models/LopHoc');

// GET: Danh sách lớp học
router.get('/', async (req, res) => {
	var dsLop = await LopHoc.find().lean();
	res.render('lophoc', {
		title: 'Danh sách lớp học',
		lops: dsLop
	});
});

// GET: Thêm lớp học
router.get('/them', (req, res) => {
	res.render('lophoc', {
		title: 'Thêm lớp học'
	});
});

// POST: Thêm lớp học
router.post('/them', async (req, res) => {
	var data = {
		maLop: req.body.maLop,
		tenLop: req.body.tenLop,
		namHoc: req.body.namHoc
	};
	await LopHoc.create(data);
	res.redirect('/lophoc');
});

// GET: Sửa lớp học
router.get('/sua/:id', async (req, res) => {
	var lop = await LopHoc.findById(req.params.id).lean();
	res.render('lophoc/sua', {
		title: 'Sửa lớp học',
		lop
	});
});

// POST: Sửa lớp học
router.post('/sua/:id', async (req, res) => {
	var data = {
		maLop: req.body.maLop,
		tenLop: req.body.tenLop,
		namHoc: req.body.namHoc
	};
	await LopHoc.findByIdAndUpdate(req.params.id, data);
	res.redirect('/lophoc');
});

// GET: Xóa lớp học
router.get('/xoa/:id', async (req, res) => {
	await LopHoc.findByIdAndDelete(req.params.id);
	res.redirect('/lophoc');
});

module.exports = router;
