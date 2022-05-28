const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'mysql',
    database: 'sampledb',
    username: 'sampleuser',
    password: 'samplepassword'
})

