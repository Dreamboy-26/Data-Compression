const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  userName: {
    type: String,
  },
  phone: {
    type: Number,
  },
  photoVideo: {
    type: String,
  },
  password: {
    type: String,
  },
})

module.exports = mongoose.model('User', userSchema)
