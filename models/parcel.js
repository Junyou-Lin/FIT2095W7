const mongoose = require('mongoose')

const parcelSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  fragile: {
    type: Boolean,
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sender',
  },
})

module.exports = mongoose.model('Parcel', parcelSchema)
