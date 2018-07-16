const router = require('express').Router()
const NewsAPI = require('newsapi')
const apiKey = process.env.APIKEY
const newsapi = new NewsAPI(apiKey)
module.exports = router

router.get('/', (req, res, next) => {
  newsapi.v2.topHeadlines({
    language: 'en'
  })
    .then(articles => {
      res.send(articles).status(200)
    })
})

router.get('/:category', (req, res, next) => {
  newsapi.v2.topHeadlines({
    category: req.params.category,
    language: 'en'
  })
    .then(articles => {
      res.send(articles).status(200)
    })
})


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
