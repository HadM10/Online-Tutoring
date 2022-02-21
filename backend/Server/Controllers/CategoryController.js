require('../models/connectDB')
const Category = require('../models/Category')
const { ObjectId } = require('mongodb')
const multer = require('multer') // s est pour uploder des images et leur storage


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, uuidv4() + '-' + fileName)
    }
  });

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    }
  })

exports.Categories = async (req, res) => {
    try {
      const Categories = await Category.find()
        .populate({ path: 'name' })
        .populate({ path: 'SubCategory.SubCategoryId', model: 'SubCategory' })
      res.json(Categories);
    } catch (error) {
      res.status(404).json({ message: error })
    }
  }

exports.findCategories = async (req, res) => {
    try {
      const name = req.body.name
      const Categories = await Category.find({ title: new RegExp(name, 'i') })
      .populate({ path: 'name' })
      .populate({ path: 'SubCategory.SubCategoryId', model: 'SubCategory' })
      res.json(Categories);
    } catch (error) {
      res.status(404).json({ message: error })
    }
  }

exports.uploadPhoto = upload.single('photo')

exports.addCategory = async (req, res, next) => {
  if (req.body.name === undefined || req.file.filename === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const url = req.protocol + '://' + req.get('host')
  req.body.Category = JSON.parse(req.body.Category)
  
  const newCategory = new Category({
    name: req.body.name,
    photo: url + '/public/' + req.file.filename
  });

  try {
    await newCategory.save();
    res.json(newCategory);
  } catch (error) {
    next(error)
  }

}

exports.updateCategory = async (req, res, next) => {
    const CategoryId = req.params.id
    if (req.params.id === undefined || req.body.name === undefined 
      ) {
      return response.status(400).json({ error: 'content missing' })
    }
    const url = req.protocol + '://' + req.get('host')
    req.body.SubCategory = JSON.parse(req.body.SubCategory)
   
    let newCategory = {}
    if (req.file) {
        newCategory = {
        name: req.body.title,
        photo: url + '/public/' + req.file.filename,
      };
    }
    else {
        newCategory = {
        name: req.body.title,
      };
    }
  
    try {
      const updateCategory = await Category.findByIdAndUpdate({ _id: CategoryId }, newCategory);
      res.json(updateCategory);
    } catch (error) {
      next(error)
    }
  }

exports.deleteCategory = async (req, res) => {
    const CategoryId = req.params.id;
    try {
      const data = await Category.deleteOne({ _id: CategoryId });
      res.json(data);
    } catch (error) {
      res.status(400).json({ message: error })
    }
  }



  //trainer categories

exports.theCategories = async (req, res) => {
    try {
      let date = new Date()
      console.log(date)
      const Categories = await Category.find({ "name": { $gte: String } })
      console.log(Categories)
      res.json(Categories);
    } catch (error) {
      res.status(404).json({ message: error })
    }
  }

