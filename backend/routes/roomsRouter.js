const express = require('express')
const router = express.Router()

// Models
const Room = require('../models/room')

/* Pertaining to Rooms */
router.get('/getallrooms', async (req, res) => {
  try {
    const rooms = await Room.find({})
    return res.send(rooms)
  } catch (error) {
    return res.status(error.code).json({ message: error })
  }
})

router.post('/getroombyid', async (req, res) => {
  const room_id = req.body.room_id
  try {
    const room = await Room.findOne({ _id: room_id })
    return res.send(room)
  } catch (error) {
    return res.status(error.code).json({ message: error })
  }
})

module.exports = router
