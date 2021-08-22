const mongoose = require('mongoose')

const mongoURL = 'mongodb+srv://temple:grateful@cluster0.qj91v.mongodb.net/hotel-app'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

const connection = mongoose.connection

connection.on('error', console.error.bind(console, 'connection error:'))
connection.on('connected', function () {
  console.log('MongoDB Connection Successful.')
})

module.exports = mongoose
