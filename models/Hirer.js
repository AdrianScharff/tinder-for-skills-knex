const knex = require('../config')

const create = (hirerBody) => {
    return knex
        .insert(hirerBody)
        .into('hirer')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('hirer_id', 'hirer_name', 'hirer_description', 'active', 'created_at')
        .from('hirer')
}

const findOne = (hirerId) => {
    return knex
        .select('hirer_id', 'hirer_name', 'hirer_description', 'active', 'created_at')
        .from('hirer')
        .where('hirer_id', hirerId)
}

const update = (hirerId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate)
        .from('hirer')
        .where({ hirer_id: hirerId })
        .returning('*')
}

const softDelete = (hirerId) => {
    return knex
        .update({ active: false })
        .from('hirer')
        .where({ hirer_id: hirerId })
}

const destroy = (hirerId) => {
    return knex
        .delete()
        .from('hirer')
        .where({ hirer_id: hirerId })
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    softDelete,
    destroy
}