const Sequelize = require('sequelize')
const db = require('../db')

const Group = db.define('group', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Group
