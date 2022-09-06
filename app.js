const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const sender = require('./routers/sender')
const parcel = require('./routers/parcel')

const app = express()

app.listen(8080)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

mongoose.connect('mongodb://0.0.0.0:27017', function (err) {
  if (err) {
    return console.log('Mongoose - connection error:', err)
  }
  console.log('Connect Successfully')
})

//Configuring Endpoints
//Sender RESTFul endpoints
app.post('/sender', sender.createOne)
app.get('/sender/:name', sender.getOne)
app.put('/sender', sender.updateOne)
app.put('/sender/parcel', sender.addParcel)
app.delete('/sender', sender.deleteOne)

//Parcel RESTFul endpoints
app.get('/parcel', parcel.getByAddress)
app.put('/parcel', parcel.updateOne)
