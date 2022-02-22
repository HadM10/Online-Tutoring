//CONNECT TO DATABASE
require('../connectDB')
const subCategory = require('../models/SubCategory')

//GET SUBCATEGORIES
exports.subCategory = async (req, res) => {
  try {
    const subCategories = await subCategory.find()
      .populate({ path: 'categoryId', model: 'Category' })
    res.json(subCategories);
  } catch (error) {
    res.status(404).json({ message: error })
  }
}


//NOT REQUIRED
// ADD OR POST SUBCATEGORY
exports.addsubCategory = async (req, res) => {
  const newsubCategory = new subCategory({
    name: req.body.name,
    photo: req.body.photo,
    categoryId: req.body.categoryId

  });

  try {
    await newsubCategory.save();
    res.json(newsubCategory);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//DELETE SUBCATEGORY
exports.deletesubCategory = async (req, res) => {
  const subCategoryId = req.params.id;
  try {
    const data = await subCategory.deleteOne({ _id: subCategoryId });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//EDIT OR UPDATE SUBCATEGORY
exports.editsubCategory = async (req, res) => {
  const subCategoryId = req.params.id;
  const newsubCategory = {
    name: req.body.name,
    photo: req.body.photo,
    categoryId: req.body.categoryId
  };
  try {
    const updatesubCategory = await subCategory.findByIdAndUpdate({ _id: subCategoryId }, newsubCategory);
    res.json(updatesubCategory);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}