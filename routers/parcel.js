const Parcel = require('../models/parcel')

module.exports = {
  getByAddress: async (req, res) => {
    try {
      const parcel = await Parcel.find({ address: req.query.address })
      res.status(201).json(parcel)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  updateOne: async (req, res) => {
    try {
      const parcel = await Parcel.findByIdAndUpdate(req.body.id, req.body, {
        new: true,
      })
      res.status(201).json(parcel)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
}
