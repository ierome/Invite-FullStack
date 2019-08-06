const router = require('express').Router()
const axios = require('axios')

var going = []
var notGoing = []

router.get("/greeting", (req, res, next) => {
  res.json({
    greeting: 'Hello World from Express and Node!'
  })
})
router.get('/', (req, res, next) => {
  axios.get('https://randomuser.me/api/').then(resp => {
    finalData = resp.data
    res.json(finalData)
  })
})
router.get('/numbers', (req, res, next) => {
  res.json({going: going.length, notGoing: notGoing.length})
})
router.post('/mark-invitee', (req,res,next) => {
  if (req.body.going === true) {
    going.push(req.body.results[0])
    res.json(going)
  } else {
    notGoing.push(req.body.results[0])
    res.json(notGoing)
  }
})
router.get('/going', (req, res, next) => {
  res.json(going)
})
router.get('/notgoing', (req, res, next) => {
  res.json(notGoing)
})
module.exports = router