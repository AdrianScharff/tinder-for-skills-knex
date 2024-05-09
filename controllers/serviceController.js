const serviceModel = require('../models/Service')

const createOneService = (req, res) => {
    serviceModel.create(req.body)
        .then(service => res.status(201).send(service))
        .catch(error => res.status(400).send(error))
}

const findAllServices = (req, res) => {
    serviceModel.findAll()
        .then(services => res.status(200).send(services))
        .catch(error => res.status(400).send(error))
}

const findOneService = (req, res) => {
    serviceModel.findOne(req.params.serviceId)
        .then(service => res.status(200).send(service))
        .catch(error => res.status(400).send(error))
}

const updateOneService = (req, res) => {
    serviceModel.update(req.params.serviceId, req.body)
        .then(service => res.status(200).send(service))
        .catch(error => res.status(400).send(error))
}

const softDeleteOneService = (req, res) => {
    serviceModel.softDelete(req.params.serviceId)
        .then(service => res.status(204).send())
        .catch(error => res.status(400).send(error))
}

const destroyOneService = (req, res) => {
    serviceModel.destroy(req.params.serviceId)
        .then(service => res.status(204).send())
        .catch(error => res.status(400).send(error))
}

module.exports = {
    findAllServices,
    findOneService,
    createOneService,
    updateOneService,
    softDeleteOneService,
    destroyOneService
}