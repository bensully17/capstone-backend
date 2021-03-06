const express = require('express')
const router = express.Router()
const queries = require('../db/queries')



router.get('/', (req, res) => {
  queries.getAllWines().then(wines => {
    res.json(wines)
  })
})

router.post('/', (req, res) => {
  queries.addWineToDB(req.body)
  .then(newWine => {
    res.status(201).json({newWine})
  })
})

module.exports = router