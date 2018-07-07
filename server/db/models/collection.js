const Sequelize = require('sequelize')
const db = require('../db')

const Collection = db.define('collection', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Collection
