const Sequelize = require('sequelize')
const db = require('../db')

const Character = db.define('character', {
  label: {
    type: Sequelize.STRING,
    allowNull: false
  },
  group: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  level: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  nickname: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0
    }
  }
})

module.exports = Character
