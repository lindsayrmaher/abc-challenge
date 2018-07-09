const Sequelize = require('sequelize')
const db = require('../db')

const Link = db.define('link', {
  relationship: {
    type: Sequelize.STRING,
    defaultValue: 'friend'
  }
})

module.exports = Link
