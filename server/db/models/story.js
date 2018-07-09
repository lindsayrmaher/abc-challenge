const Sequelize = require('sequelize')
const db = require('../db')

const Story = db.define('story', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Story
