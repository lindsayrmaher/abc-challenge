const router = require('express').Router()
const { Story } = require('../db/models')
module.exports = router;

router.get('/', (req, res, next) => {
  Story.findAll()
    .then(stories => res.json(stories))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Story.findAll({
    where: {
      id: req.params.id
    },
    include: [{ all: true }]
  })
    .then(stories => res.json(stories))
    .catch(next)
})
