// Require in all of our models
const Character = require('./character')
const Collection = require('./collection')
const Group = require('./group')
const Link = require('./link')
const Story = require('./story')
const User = require('./user')

// Set up relationships
User.hasMany(Collection)

Collection.belongsTo(User)
Collection.hasMany(Story)

Story.belongsTo(Collection)
Story.hasMany(Group)

Group.belongsTo(Story)
Group.hasMany(Character)

Character.belongsTo(Group)

Character.belongsToMany(Character, { as: 'link', through: 'links' })

// Export models
module.exports = { Character, Collection, Group, Link, Story, User }
