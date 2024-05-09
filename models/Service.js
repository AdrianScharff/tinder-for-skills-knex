const knex = require('../config')

const create = (serviceBody) => {
    return knex
        .insert(serviceBody)
        .into('service')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('service_id', 'provider_id', 'hirer_id', 'skill_id', 'hourly_rate', 'hours', 'advance_amount', 'advance_is_paid', 'start_date', 'place', 'is_completed', 'is_fully_paid', 'provider_rating')
        .from('service')
}

const findOne = (serviceId) => {
    return knex
        .select('service_id', 'provider_id', 'hirer_id', 'skill_id', 'hourly_rate', 'hours', 'advance_amount', 'advance_is_paid', 'start_date', 'place', 'is_completed', 'is_fully_paid', 'provider_rating')
        .from('service')
        .where('service_id', serviceId)
}

const update = (serviceId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate)
        .from('service')
        .where({ service_id: serviceId })
        .returning('*')
}

const softDelete = (serviceId) => {
    return knex
        .update({ active: false })
        .from('service')
        .where({ service_id: serviceId })
}

const destroy = (serviceId) => {
    return knex
        .delete()
        .from('service')
        .where({ service_id: serviceId })
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    softDelete,
    destroy
}