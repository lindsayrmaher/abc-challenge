const router = require('express').Router()
const { Character } = require('../db/models')
module.exports = router;

router.get('/', (req, res, next) => {
  Character.findAll()
    .then(characters => res.json(characters))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Character.findAll({
    where: {
      groupId: req.params.id
    },
    include: [{ all: true }]
  })
    .then(characters => res.json(characters))
    .catch(next)
})
