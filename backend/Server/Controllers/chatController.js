//CONNECT TO DATABASE
require('../connectDB')

const Chat = require('../models/Chat')

//GET CHATS
exports.Chat = async (req, res) => {
  try {
    const Chats = await Chat.find()
    res.json(Chats);
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

// ADD OR POST CHAT
exports.addChat = async (req, res) => {
  const newChat = new Chat({
    sender: req.body.sender,
    receiver: req.body.receiver,
    dateTime: req.body.dateTime,
    seen: req.body.seen,
    message: req.body.message
  });

  try {
    await newChat.save();
    res.json(newChat);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//DELETE CHAT
exports.deleteChat = async (req, res) => {
  const ChatId = req.params.id;
  try {
    const data = await Chat.deleteOne({ _id: ChatId });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//EDIT OR UPDATE CHAT
exports.editChat = async (req, res) => {
  const ChatId = req.params.id;
  const newChat = {
    sender: req.body.sender,
    receiver: req.body.receiver,
    dateTime: req.body.dateTime,
    seen: req.body.seen,
    message: req.body.message
  };
  try {
    const updateChat = await Chat.findByIdAndUpdate({ _id: ChatId }, newChat);
    res.json(updateChat);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}