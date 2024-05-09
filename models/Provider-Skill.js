const knex = require('../config')

const create = (providerSkillbody) => {
    return knex
        .insert(providerSkillbody)
        .into('provider_skill')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('provider_id', 'skill_id', 'hourly_rate')
        .from('provider_skill')
}

const findOne = (providerId, skillId) => {
    return knex
        .select('provider_id', 'skill_id', 'hourly_rate')
        .from('provider_skill')
        .where({ provider_id: providerId, skill_id: skillId })
}

const update = (providerId, skillId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate)
        .from('provider_skill')
        .where({ provider_id: providerId, skill_id: skillId })
        .returning('*')
}

const softDelete = (providerId, skillId) => {
    return knex
        .update({ active: false })
        .from('provider_skill')
        .where({ provider_id: providerId, skill_id: skillId })
}

const destroy = (providerId, skillId) => {
    return knex
        .delete()
        .from('provider_skill')
        .where({ provider_id: providerId, skill_id: skillId })
}

module.exports = {
    create,
    findAll,
    findOne,
    softDelete,
    update,
    destroy
}