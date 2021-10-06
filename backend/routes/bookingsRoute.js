import moment from 'moment'

const express = require('express')
const router = express.Router()

// Models
const Booking = require('../models/booking')
const Room = require('../models/room')

/* Register user. */
router.post('/bookroom', async (req, res, next) => {
  const { room, userId, fromDate, toDate, totalDays, totalAmount } = req.body

  try {
    const newBooking = new Booking({
      room: room.name,
      room_id: room._id,
      user_id: userId,
      from_date: fromDate,
      to_date: toDate,
      total_amount: totalAmount,
      total_days: totalDays,
      transaction_id: '1234',
    })

    const booking = await newBooking.save()
    const roomTemp = await Room.findOne({ _id: room._id })
    roomTemp.currentBookings.push({
      bookingId: booking._id,
      fromDate: moment(fromDate).format('DD-MM-YYYY'),
      toDate: moment(toDate).format('DD-MM-YYYY'),
    })

    res.send('Room booked successfully')
  } catch (error) {
    return res.status(400).json({ error })
  }
})

module.exports = router
