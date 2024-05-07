const modelProvider = require('../models/Provider')

// CREATE
const createProvider = (req, res) => {
    modelProvider.create(req.body).then(provider =>
        res.status(201).send(provider))
        .catch(error =>
            res.status(400).send(error))
}

// READ
const findAllProviders = (req, res) => {
    modelProvider.findAll().then(providers =>
        res.status(200).send(providers))
        .catch(error =>
            res.status(400).send(error))
}

const findOneProvider = (req, res) => {
    modelProvider.findOne(req.params.providerId).then(provider =>
        res.status(200).send(provider))
        .catch(error =>
            res.status(200).send(error))
}

// UPDATE
const updateOneProvider = (req, res) => {
    modelProvider.update(req.params.providerId, req.body)
        .then(provider =>
            res.status(200).send(provider))
        .catch(error =>
            res.status(400).send(error))
}

// DELETE

module.exports = {
    findAllProviders,
    findOneProvider,
    createProvider,
    updateOneProvider
}