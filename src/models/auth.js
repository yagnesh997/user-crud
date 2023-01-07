const mongoose = require('mongoose')

const authSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

const auth = mongoose.model('auth', authSchema)

module.exports = auth
