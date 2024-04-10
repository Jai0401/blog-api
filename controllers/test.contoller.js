const models = require('../models');

async function test(req, res) {

    const post = await models.Post.findByPk(1, {
        include:[models.Category]
    });

    const category = await models.Category.findByPk(2, {
        include:[models.Post]
    });



    res.status(200).json({
        data: category
    });
}

module.exports = {
    test: test
}
