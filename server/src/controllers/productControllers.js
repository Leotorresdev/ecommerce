const prisma = require('../../prisma/client');

const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createProduct = async (req, res) => {
  const { title, price, imageUrl } = req.body;
  try {
    const product = await prisma.product.create({ data: { title, price, imageUrl } });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
};


const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.product.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
};

module.exports = {
  getProducts,
  createProduct,
  deleteProduct
};