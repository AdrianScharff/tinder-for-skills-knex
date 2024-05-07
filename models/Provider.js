// const { where } = require('../config')
const knex = require('../config')

const create = (bodyProvider) => {
    return knex
        .insert(bodyProvider)
        .into('provider')
        .returning('*')
}

const findAll = () => {
    return knex
        .select(['provider_id', 'name', 'last_name', 'age', 'description'])
        .from('provider')
}

const findOne = (providerId) => {
    return knex
        .select('*')
        .from('provider')
        .where('provider_id', providerId)
}

const update = (providerId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate)
        .from('provider')
        .where({ provider_id: providerId })
        .returning('*')
}

const softDelete = (providerId) => {
    return knex
        .update({ active: false })
        .from('provider')
        .where({ provider_id: providerId })
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    softDelete
}