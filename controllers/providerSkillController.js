const providerSkillModel = require('../models/Provider-Skill')

// CREATE
const createOneProviderSkill = (req, res) => {
    providerSkillModel.create(req.body)
        .then(providerSkill => res.status(201).send(providerSkill))
        .catch(error => res.status(400).send(error))
}

// READ
const findAllProviderSkills = (req, res) => {
    providerSkillModel.findAll()
        .then(providerSkills => res.status(200).send(providerSkills))
        .catch(error => res.status(400).send(error))
}

const findOneProviderSkill = (req, res) => {
    providerSkillModel.findOne(req.params.providerId, req.params.skillId)
        .then(providerSkill => res.status(200).send(providerSkill))
        .catch(error => res.status(400).send(error))
}

// UPDATE
const updateOneProviderSkill = (req, res) => {
    providerSkillModel.update(req.params.providerId, req.params.skillId, req.body)
        .then(providerSkill => res.status(200).send(providerSkill))
        .catch(error => res.status(400).send(error))
}

// DELETE
const softDeleteOneProviderSkill = (req, res) => {
    providerSkillModel.softDelete(req.params.providerId, req.params.skillId)
        .then(providerSkill => res.status(204).send())
        .catch(error => res.status(400).send())
}

const destroyOneProviderSkill = (req, res) => {
    providerSkillModel.destroy(req.params.providerId, req.params.skillId)
        .then(providerSkill => res.status(204).send())
        .catch(error => res.status(400).send(error))
}

module.exports = {
    createOneProviderSkill,
    findAllProviderSkills,
    findOneProviderSkill,
    softDeleteOneProviderSkill,
    updateOneProviderSkill,
    destroyOneProviderSkill
}