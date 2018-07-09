const db = require('../server/db')
const { Character, Collection, Group, Link, Story, User } = require('../server/db/models')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  let seedUsers;
  let seedCollections;
  let seedStories;
  let seedGroups;

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
    { title: 'Harry Potter', description: 'Wizards, Muggles and Magic!' },
    { title: 'Tolstoy', description: 'Russian Sadness' },
    { title: 'Lord of the Rings', description: 'Action, Adventure, and Bravery!' }
  ]).then(() => {
    return Collection.findAll()
  }).then(collections => {
    seedCollections = collections;
    collections.forEach(collection => {
      collection.setUser(1)
    })
  })

  await Story.bulkCreate([
    { title: `The Sorcerer's Stone`, description: `You're a wizard, Harry!` },
    { title: 'Anna Karenina', description: 'Intrigue, Romance and Revolt!' },
    { title: 'Return of the King', description: 'Aragorn wins everything' }
  ]).then(() => {
    return Story.findAll()
  }).then(stories => {
    seedStories = stories;
    stories[0].setCollection(1)
    stories[1].setCollection(2)
    stories[2].setCollection(3)
  })

  await Group.bulkCreate([
    { title: `Gryffindor`, description: `They're the best` },
    { title: 'Slytherin', description: 'We all hate them' },
    { title: 'Ravenclaw', description: 'Stop trying to make Ravenclaw happen' },
    { title: 'Hufflepuff', description: 'Cutie patooties' }
  ]).then(() => {
    return Group.findAll()
  }).then(groups => {
    seedGroups = groups;
    groups.forEach(group => {
      group.setStory(1)
    })
  })

  const seedCharacters = await Promise.all([
    Character.create({
      name: 'Harry Potter',
      nickname: 'No One',
      age: 12
    })
      .then(character => (character.setGroup(1))),
    Character.create({
      name: 'Ron Weasley',
      age: 12
    })
      .then(character => {
        character.addLink(1)
        character.setGroup(1)
      }),
    Character.create({
      name: 'Hermione Granger',
      age: 12
    })
      .then(character => {
        character.addLink(2)
        character.addLink(1)
        character.setGroup(1)
      }),
    Character.create({
      name: 'Luna Lovegood',
      age: 13
    })
      .then(character => {
        character.addLink(3)
        character.addLink(1)
        character.setGroup(3)
      }),
    Character.create({
      name: 'Professor Snape',
      age: 27
    })
      .then(character => (character.setGroup(2))),
    Character.create({
      name: 'Cedric Diggory',
      age: 14
    })
      .then(character => (character.setGroup(4))),
    Character.create({
      name: 'Albus Dumbledore',
      age: 101
    })
      .then(character => (character.setGroup(1))),
    Character.create({
      name: 'Draco Malfoy',
      age: 12
    })
      .then(character => (character.setGroup(2))),
    Character.create({
      name: 'Peter Pettigrew',
      age: 33
    })
      .then(character => (character.setGroup(2)))
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
