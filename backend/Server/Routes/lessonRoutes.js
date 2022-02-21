const express = require('express')
const router = express.Router()
const lessonController = require('../Controllers/lessonController');

router.route('/')
    .get(lessonController.Lesson)
    .post(lessonController.addLesson)

router.route('/:id')
    .delete(lessonController.deleteLesson)
    .put(lessonController.editLesson)


module.exports = router