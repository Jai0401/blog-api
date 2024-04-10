// Import required modules
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

// Define routes for categories
router.post('/', categoryController.save); // Create a new category
router.get('/:id', categoryController.show); // Get a category by ID
router.get('/', categoryController.index); // Get all categories
router.put('/:id', categoryController.update); // Update a category by ID
router.delete('/:id', categoryController.destroy); // Delete a category by ID

module.exports = router;
