require ('../models/connectDB')
const Trainer = require('../models/Trainer')
const { ObjectId } = require('mongodb')

exports.Trainer = async (req, res, next) => {
    try {
      
      const Trainer = await Trainer.find({ date: { $gte: dateNow.toISOString().split('T')[0] } })
        .populate({ path: 'CategoryId', model: 'Category' })
        .populate({ path: 'SubCategoryId', model: 'SubCategory' })
      res.json(Trainer);
    } catch (error) {
      next(error)
    }
  }

  exports.addTrainer = async (req, res) => {
    req.body.userId = ObjectId(req.body.userId)
    req.body.CategoryId = ObjectId(req.body.CategoryId)
    req.body.SubCategoryId = ObjectId(req.body.SubCategoryId)
    req.body.technology = ObjectId(req.body.technology)
    const newTicket = new Ticket({
      userId: req.body.userId,
      cancelTicket: false,
      movieId: req.body.movieId,
      roomId: req.body.roomId,
      seatNumber: req.body.seatNumber,
      blockName: req.body.blockName,
      technologyId: req.body.technology,
      date: req.body.day,
      price: req.body.price,
      time: req.body.time
    });
    console.log(newTicket)
    try {
      await newTicket.save();
      res.json(newTicket);
    } catch (error) {
      res.status(400).json({ message: error })
    }
  }