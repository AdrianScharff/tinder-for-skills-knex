const skillModel = require('../models/Skill')

// CREATE
const createSkill = (req, res) => {
    skillModel.create(req.body)
        .then(skill => res.status(201).send(skill))
        .catch(error => res.status(400).send(error))
}

// READ
const findAllSkills = (req, res) => {
    skillModel.findAll()
        .then(skills => res.status(200).send(skills))
        .catch(error => res.status(400).send(error))
}

const findOneSkill = (req, res) => {
    skillModel.findOne(req.params.skillId)
        .then(skill => res.status(200).send(skill))
        .catch(error => res.status(400).send(error))
}

// UPDATE
const updateOneSkill = (req, res) => {
    skillModel.update(req.params.skillId, req.body)
        .then(skill => res.status(200).send(skill))
        .catch(error => res.status(400).send(error))
}

// DELETE
const softDeleteOneSkill = (req, res) => {
    skillModel.softDelete(req.params.skillId)
        .then(skill => res.status(204).send())
        .catch(error => res.status(400).send(error))
}

const destroyOneSkill = (req, res) => {
    skillModel.destroy(req.params.skillId)
        .then(skill => res.status(204).send())
        .catch(error => res.status(400).send(error))
}

module.exports = {
    findAllSkills,
    findOneSkill,
    createSkill,
    updateOneSkill,
    softDeleteOneSkill,
    destroyOneSkill
}