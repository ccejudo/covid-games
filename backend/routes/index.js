const express = require('express')
const router = express.Router()

const { getQuestions, getSpecific } = require('../controllers')

router.get('/get-questions', getQuestions)
router.get('/get-specific/:num', getSpecific)

module.exports = router
