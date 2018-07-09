const db = require('../server/db')
const { Character, Collection, User } = require('../server/db/models')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  let seedUsers;
  let seedCollections;
  //let seedCharacters;

  //one admin user for testing purposes
  await User.bulkCreate([
    { email: 'admin@test.com', password: '1234', isAdmin: true },
    { email: 'kait@test.com', password: '1234', isAdmin: false },
    { email: 'pete@test.com', password: '1234', isAdmin: false }
  ]).then(() => {
    console.log('created users!')
    return User.findAll()
  }).then(users => {
    seedUsers = users;
    console.log('got all the users')
  })

  await Collection.bulkCreate([
    { title: 'Game of Thrones', description: 'Dragons, War and Magic!' },
    { title: 'Anna Karenina', description: 'Intrigue, Romance and Revolt!' },
    { title: 'Lord of the Rings', description: 'Action, Adventure, and Bravery!' }
  ]).then(() => {
    console.log('created collections!')
    return Collection.findAll()
  }).then(collections => {
    seedCollections = collections;
    console.log('got all the collections')
  })

  const seedCharacters = await Promise.all([
    Character.create({
      label: 'Arya',
      family: 'Stark',
      nickname: 'No One',
      age: 12
    })
      .then(character => character.setCollections([1])),
    Character.create({
      label: 'Ned',
      family: 'Stark',
      nickname: 'The Quiet Wolf',
      age: 35
    })
      .then(character => character.setCollections([1])),
    Character.create({
      label: 'Joffrey',
      family: 'Baratheon',
      age: 13
    })
      .then(character => character.setCollections([1])),
    Character.create({
      label: 'Anna',
      family: 'Karenina',
      age: 24
    })
      .then(character => character.setCollections([2])),
    Character.create({
      label: 'Alexei',
      family: 'Vronsky',
      age: 27
    })
      .then(character => character.setCollections([2])),
    Character.create({
      label: 'Alexei',
      family: 'Karenin',
      age: 35
    })
      .then(character => character.setCollections([2])),
    Character.create({
      label: 'Bilbo',
      family: 'Baggins',
      age: 101
    })
      .then(character => character.setCollections([3])),
    Character.create({
      label: 'Frodo',
      family: 'Baggins',
      age: 35
    })
      .then(character => character.setCollections([3])),
    Character.create({
      label: 'Samwise',
      family: 'Gamgee',
      age: 33
    })
      .then(character => character.setCollections([3]))
    ])

  console.log(`seeded ${seedUsers.length} users, ${seedCollections.length} collections, and ${seedCharacters.length} characters`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

console.log('seeding...')
