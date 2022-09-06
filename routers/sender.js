const Sender = require('../models/sender')
const Parcel = require('../models/parcel')

module.exports = {
  getOne: async (req, res) => {
    try {
      const sender = await Sender.find({ name: req.params.name }).populate(
        'parcels'
      )
      res.status(200).json(sender)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  addParcel: async (req, res) => {
    try {
      const parcel = await Parcel.create(req.body.parcel)
      const sender = await Sender.findByIdAndUpdate(
        req.body.senderId,
        {
          $push: { parcels: parcel._id },
        },
        { new: true }
      ).populate('parcels')
      res.status(201).json(sender)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  createOne: async (req, res) => {
    try {
      const sender = await Sender.create(req.body)
      res.status(201).json(sender)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  updateOne: async (req, res) => {
    try {
      const sender = await Sender.findByIdAndUpdate(req.body.id, req.body, {
        new: true,
      })
      res.status(200).json(sender)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  deleteOne: async (req, res) => {
    try {
      const sender = await Sender.findByIdAndDelete(req.body.id)
      res.status(200).json({ message: `Sender ${sender.name} deleted` })
    } catch (err) {
      res.status(500).json(err)
    }
  },
}
