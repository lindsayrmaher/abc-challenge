const router = require('express').Router()
const { Collection } = require('../db/models')
module.exports = router;

router.get('/', (req, res, next) => {
  Collection.findAll({ include: [{all: true}] })
    .then(collections => res.json(collections))
    .catch(next)
})
