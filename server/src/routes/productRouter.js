const express = require('express');
const router = express.Router();
const { getProducts, createProduct, deleteProduct } = require('../controllers/productControllers');
const authenticateToken = require('../middlewares/middleware');

router.get('/', getProducts);
router.post('/', authenticateToken, createProduct);
router.delete('/:id', authenticateToken, deleteProduct);

module.exports = router;
