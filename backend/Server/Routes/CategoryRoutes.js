const express = require('express')
const router = express.Router()
const categoriesController = require('../Controllers/CategoryController');

router.route('/')
    .get(categoriesController.categories)
    .post(categoriesController.addCategory)

    router.route('/:id')
    .delete(categoriesController.deleteCategory)
    .update(categoriesController.editCategory)

    router.route('/find')
    .post(categoriesController.findCategory)

module.exports = router