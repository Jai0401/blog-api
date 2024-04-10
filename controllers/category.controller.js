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

// Implement show, index, update, and destroy functions similarly to your previous controller

module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy: destroy,
};
