//CONNECT TO DATABASE
require('../models/connectDB')
const useUpload = require('../upload/uploadPhoto')
const Tutorial = require('../models/Tutorial')

//GET TUTORIALS BY category
exports.Tutorial = async (req, res) => {
  try {
    const subCategory = req.body.subCategory
    const tutorials = await Tutorial.find({ subCategories: subCategory })
      .populate({ path: 'trainerId', model: 'Users' })
      .populate({ path: 'subCategories', model: 'SubCategories' })
    res.json(tutorials);
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

//ADD OR POST TUTORIAL
exports.uploadPhoto = useUpload.upload.single('photo')
exports.addTutorial = async (req, res) => {
  const url = req.protocol + '://' + req.get('host')
  const newTutorial = new Tutorial({
    title: req.body.title,
    price: req.body.price,
    pricePerLesson: req.body.pricePerLesson,
    // photo: url + '/public/' + req.file.filename,
    photo: req.body.photo,
    trainerId: req.body.trainerId,
    subCategories: req.body.subCategories,
    dateTime: req.body.dateTime
  });

  try {
    await newTutorial.save();
    res.json(newTutorial);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//DELETE TUTORIAL
exports.deleteTutorial = async (req, res) => {
  const tutorialId = req.params.id;
  try {
    const data = await Tutorial.deleteOne({ _id: tutorialId });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//EDIT OR UPDATE TUTORIAL
//PHOTO
exports.editTutorial = async (req, res) => {
  const tutorialId = req.params.id;
  const newTutorial = {
    title: req.body.title,
    price: req.body.price,
    pricePerLesson: req.body.pricePerLesson,
    photo: req.body.photo,
    trainerId: req.body.trainerId,
    subCategories: req.body.subCategories,
    dateTime: req.body.dateTimen
  };
  try {
    const updateTutorial = await Tutorial.findByIdAndUpdate({ _id: tutorialId }, newTutorial);
    res.json(updateTutorial);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}