//CONNECT TO DATABASE
require('../models/connectDB')
const { ObjectId } = require('mongodb')
const Lesson = require('../models/Lesson')
const Tutorial = require('../models/Tutorial')

//GET LESSONS FOR TUTORIAL
exports.Lesson = async (req, res) => {
  try {
    const id = req.params.id
    const Lessons = await Lesson.find({ tutorial: id })
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

exports.saveDate = async (req, res) => {
  try {
    const id = req.params.id
    const tutorialId = req.body.tutorialId

    //DATETIME NOT AVAILABLE ANYMORE
    const Tutorials = await Tutorial.find({ _id: tutorialId })
    let dateTimeTutorial = Tutorials[0].dateTime
    for (let i = 0; i < dateTimeTutorial.length; i++) {
      if (dateTimeTutorial[i].DateTime === req.body.dateTime){
        dateTimeTutorial[i].available = false
      }
    }
    Tutorials[0].dateTime = dateTimeTutorial
    const newTutorial = await Tutorial.findByIdAndUpdate({ _id: tutorialId }, Tutorials[0])

    //CHOOSE A DATETIME FOR THE LESSON
    const Lessons = await Lesson.find({ _id: id })
      .populate({ path: 'tutorial', model: 'Tutorial' })
      .populate({ path: 'trainee.userId', model: 'Users' })

    // let userId = '621790ee6afd8fc5bf7c11f6'
    const token = req.cookies.token;
    if (!token) return res.json(false);
    let userId = jwt.verify(token, process.env.TOKEN_SECRET);

    
    let traineeDate = { "userId": ObjectId(userId), "chosenDate": req.body.dateTime, "done": false }
    Lessons[0].trainee.push(traineeDate)
    const newLesson = await Lesson.findByIdAndUpdate({ _id: id }, Lessons[0])
    res.json(Lessons);
  } catch (error) {
    res.status(404).json({ message: error })
  }
}