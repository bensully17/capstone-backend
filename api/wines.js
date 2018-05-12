const express = require('express')
const router = express.Router()

const queries = require('../db/queries')

router.get('/', (req, res) => {
  queries.getAll().then(wines => {
    res.json(wines)
  })
})

router.post('/', (req, res) => {
  queries.addWine(req.body)
  .then(newWine => {
    res.status(201).json({newWine})
  })
})

module.exports = router