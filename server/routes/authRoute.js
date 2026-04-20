const express = require('express')
const { register } = require('../controllers/authUsers')

const router = express.Router()

router.post('/register', register)

module.exports = router;
