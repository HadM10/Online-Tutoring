const express = require('express')

const router = express.Router()

const tutorialController = require('../Controllers/tutorialController');

router.route('/')
    .get(tutorialController.Tutorial)
    .post(tutorialController.addTutorial)

router.route('/:id')
    .delete(tutorialController.deleteTutorial)
    .put(tutorialController.editTutorial)


module.exports = router