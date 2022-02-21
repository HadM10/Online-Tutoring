
const User = require("../models/Users");


module.exports = {

  createUser: async (req, res) => {       // POST
    const user = new User(req.body);
    await user.save();
    res.send(user);
  },

  findUser: async (req, res) => {        // GET 
    try {
      const user = await User.findById(req.params.id);
      res.send(user);
    } catch {
      res.status(404).send({ error: "user is not found!" });
    }
  },

  updateUser: async (req, res) => {     // Patch 
    try {
      const user = await User.findById(req.params.id);
      Object.assign(user, req.body);
      user.save();
      res.send(user);
    } catch {
      res.status(404).send({ error: "user is not found!" });
    }
  },

  deleteUser: async (req, res) => {     // Delete
    try {
      const user = await User.findById(req.params.id);
      await user.remove();
      res.send(true);
    } catch {
      res.status(404).send({ error: "user is not found!" });
    }
  },

};
