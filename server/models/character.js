const Sequelize = require('sequelize')
const db = require('../db')

const Character = db.define('character', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  family: {
    type: Sequelize.STRING
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
