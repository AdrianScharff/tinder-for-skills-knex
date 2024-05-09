const knex = require('../config')

const create = (skillBody) => {
    return knex
        .insert(skillBody)
        .into('skill')
        .returning('*')
}

const findAll = () => {
    return knex
        .select(['skill_id', 'skill_name', 'skill_description'])
        .from('skill')
}

const findOne = (skillId) => {
    return knex
        .select(['skill_id', 'skill_name', 'skill_description'])
        .from('skill')
        .where('skill_id', skillId)
}

const update = (skillId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate)
        .from('skill')
        .where({ skill_id: skillId })
        .returning('*')
}

const softDelete = (skillId) => {
    return knex
        .update({ active: false })
        .from('skill')
        .where({ skill_id: skillId })
}

const destroy = (skillId) => {
    return knex
        .delete()
        .from('skill')
        .where({ skill_id: skillId })
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    softDelete,
    destroy
}