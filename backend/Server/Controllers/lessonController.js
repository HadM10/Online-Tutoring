//CONNECT TO DATABASE
require('../connectDB')

const Lesson = require('../models/Lesson')

//GET LESSONS FOR TUTORIAL
exports.Lesson = async (req, res) => {
  try {
    const tutorialId = req.body.tutorialId
    const Lessons = await Lesson.find({ tutorial: tutorialId })
      .populate({ path: 'tutorial', model: 'Tutorial' })
      .populate({ path: 'trainee.userId', model: 'Users' })
    res.json(Lessons);
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

// ADD OR POST LESSON
exports.addLesson = async (req, res) => {
  const newLesson = new Lesson({
    tutorial: req.body.tutorial,
    title: req.body.title,
    description: req.body.description,
    trainee: req.body.trainee
  });

  try {
    await newLesson.save();
    res.json(newLesson);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//DELETE LESSON
exports.deleteLesson = async (req, res) => {
  const LessonId = req.params.id;
  try {
    const data = await Lesson.deleteOne({ _id: LessonId });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//EDIT OR UPDATE LESSON
exports.editLesson = async (req, res) => {
  const LessonId = req.params.id;
  const newLesson = {
    tutorial: req.body.tutorial,
    title: req.body.title,
    description: req.body.description,
    trainee: req.body.trainee
  };
  try {
    const updateLesson = await Lesson.findByIdAndUpdate({ _id: LessonId }, newLesson);
    res.json(updateLesson);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}