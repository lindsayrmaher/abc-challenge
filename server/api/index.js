const router = require('express').Router()
module.exports = router

// router.use('/characters', require('./characters'))
// router.use('/collections', require('./collections'))
// router.use('/stories', require('./stories'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
