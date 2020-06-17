/*
  路由模块
*/
const express = require('express');
const router = express.Router();
const service = require('./service.js');

// 查询图书
router.get('/books', service.getAllBooks);
// 添加图书
router.post('/books', service.addBook);
// 编辑图书 将值填充到输入域中
router.get('/books/:id', service.toEditBook);
// 提交编辑内容 修改表单中的值
router.put('/books/:id', service.editBook);
// 删除图书
router.delete('/books/:id', service.deleteBook);
// 验证图书名称是否存在
router.get('/books/book/:name', service.checkName);

module.exports = router;