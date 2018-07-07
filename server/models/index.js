// Require in all of our models
const Character = require('./character')
const Collection = require('./collection')
const User = require('./user')

// Set up relationships
User.hasMany(Collection)

Collection.belongsTo(User)
Collection.belongsToMany(Character, { through: CharacterCollection })

Character.belongsToMany(Collection, { through: CharacterCollection })

// Export models
module.exports = { Character, Collection, User }
