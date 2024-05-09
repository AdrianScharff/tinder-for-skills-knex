const hirerModel = require('../models/Hirer')

const createOneHirer = (req, res) => {
    hirerModel.create(req.body)
        .then(hirer => res.status(201).send(hirer))
        .catch(error => res.status(400).send(error))
}

const findAllHirers = (req, res) => {
    hirerModel.findAll()
        .then(hirers => res.status(200).send(hirers))
        .catch(error => res.status(400).send(error))
}

const findOneHirer = (req, res) => {
    hirerModel.findOne(req.params.hirerId)
        .then(hirer => res.status(200).send(hirer))
        .catch(error => res.status(400).send(error))
}

const updateOneHirer = (req, res) => {
    hirerModel.update(req.params.hirerId, req.body)
        .then(hirer => res.status(200).send(hirer))
        .catch(error => res.status(400).send(error))
}

const softDeleteOneHirer = (req, res) => {
    hirerModel.softDelete(req.params.hirerId)
        .then(hirer => res.status(204).send())
        .catch(error => res.status(400).send(error))
}

const destroyOneHirer = (req, res) => {
    hirerModel.destroy(req.params.hirerId)
        .then(hirer => res.status(204).send())
        .catch(error => res.status(400).send(error))
}

module.exports = {
    findAllHirers,
    findOneHirer,
    createOneHirer,
    updateOneHirer,
    softDeleteOneHirer,
    destroyOneHirer
}