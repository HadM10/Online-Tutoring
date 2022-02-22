const express = require('express')

const router = express.Router()

const tutorialController = require('../Controllers/tutorialController');

router.route('/')
    .get(tutorialController.Tutorial)
    .post(tutorialController.uploadPhoto, tutorialController.addTutorial)

router.route('/:id')
    .delete(tutorialController.deleteTutorial)
    .put(tutorialController.editTutorial)


module.exports = router