const express = require('express')
const router = express.Router()

const { getQuestions, getSpecific, getScores } = require('../controllers')

router.get('/get-questions', getQuestions)
router.get('/get-specific/:num', getSpecific)
router.get('/get-scores', getScores)
router.post('/get-scores', getScores)

module.exports = router
