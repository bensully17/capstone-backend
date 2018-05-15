const express = require('express')
const router = express.Router()
const queries = require('../db/queries')



router.get('/', (req, res) => {
  queries.getAllUserCellars().then(wines => {
    res.json(wines)
  })
})

router.get('/:uid', (req, res) => {
  queries.getOneUserCellar(req.params.uid)
  .then(wines => res.json(wines))
})

router.post('/', (req, res) => {
  queries.addWineToCellar(req.body)
  .then(newWine => {
    res.status(201).json({newWine})
  })
})

module.exports = router