const router = require('express').Router()
const NewsAPI = require('newsapi')
const apiKey = process.env.APIKEY
const newsapi = new NewsAPI(apiKey)
module.exports = router

router.get('/', async (req, res, next) => {
  const articles = await newsapi.v2.topHeadlines({
    country: 'us'
  })
  res.send(articles).status(200)

})

router.get('/:category', async (req, res, next) => {
  const articles = await newsapi.v2.topHeadlines({
    category: req.params.category,
    country: 'us'
  })
  res.send(articles).status(200)
})


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
