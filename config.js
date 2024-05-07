const knexfile = require('./knexfile')
const knex = require('knex')

const ENV = process.env.NODE_ENV || 'development'

module.exports = knex(knexfile[ENV])