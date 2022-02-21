const express = require('express')
const router = express.Router()
const TrainerController = require('../controllers/TrainerController');

// get all trainer profile and post

router.route('/Trainer')
    .get(TrainerController.ProfileTrainer)
    .post(Trainer.uploadPhoto, Trainer.addTrainer)
