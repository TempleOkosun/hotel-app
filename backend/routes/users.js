const express = require('express')
const router = express.Router()

// Models
const User = require('../models/user')

/* Register user. */
router.post('/register', async (req, res, next) => {
  const newUser = new User(req.body)

  try {
    const user = await newUser.save()
    res.send('Registration successful')
  } catch (error) {
    return res.status(error.code).json({ error })
  }
})

/* User Login. */
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email: email, password: password })
    if (user) {
      const tempUser = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        _id: user._id,
      }
      res.send(tempUser)
    } else {
      return res.status(400).json({ message: 'Login failed' })
    }
  } catch (error) {
    return res.status(error.code).json({ error })
  }
})

module.exports = router
