const express = require('express')
const router = express.Router()
const subCategoryController = require('../Controllers/subCategoryController');

router.route('/')
    .get(subCategoryController.subCategory)
    .post(subCategoryController.addsubCategory)

router.route('/:id')
    .delete(subCategoryController.deletesubCategory)
    .update(subCategoryController.editsubCategory)

module.exports = router