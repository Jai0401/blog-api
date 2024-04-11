const Validator = require('fastest-validator');
const models = require('../models');
const { Category } = models;

function save(req, res) {
    const categoryData = {
        name: req.body.name
    };

    const schema = {
        name: { type: 'string', optional: false, max: '255' }
    };

    const v = new Validator();
    const validationResponse = v.validate(categoryData, schema);

    if (validationResponse !== true) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: validationResponse,
        });
    }

    Category.create(categoryData)
        .then((result) => {
            res.status(201).json({
                message: 'Category created successfully',
                category: result,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Something went wrong',
                error: error,
            });
        });
}
function show(req, res) {
    const categoryId = req.params.id;

    Category.findByPk(categoryId)
        .then((category) => {
            if (!category) {
                return res.status(404).json({
                    message: 'Category not found',
                });
            }

            res.status(200).json({
                message: 'Category retrieved successfully',
                category: category,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Something went wrong',
                error: error,
            });
        });
}
function update(req, res) {
    const categoryId = req.params.id;
    const updatedData = {
        name: req.body.name
    };

    const schema = {
        name: { type: 'string', optional: false, max: '255' }
    };

    const v = new Validator();
    const validationResponse = v.validate(updatedData, schema);

    if (validationResponse !== true) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: validationResponse,
        });
    }

    Category.findByPk(categoryId)
        .then((category) => {
            if (!category) {
                return res.status(404).json({
                    message: 'Category not found',
                });
            }

            return category.update(updatedData);
        })
        .then((updatedCategory) => {
            res.status(200).json({
                message: 'Category updated successfully',
                category: updatedCategory,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Something went wrong',
                error: error,
            });
        });
}

function index(req, res) {
    Category.findAll()
        .then((categories) => {
            res.status(200).json({
                message: 'Categories retrieved successfully',
                categories: categories,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Something went wrong',
                error: error,
            });
        });
}
function destroy(req, res) {
    const categoryId = req.params.id;

    Category.findByPk(categoryId)
        .then((category) => {
            if (!category) {
                return res.status(404).json({
                    message: 'Category not found',
                });
            }

            return category.destroy();
        })
        .then(() => {
            res.status(200).json({
                message: 'Category deleted successfully',
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Something went wrong',
                error: error,
            });
        });
}

// Implement update and destroy functions similarly to your previous controller

module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy: destroy,
};
