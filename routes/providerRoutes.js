const express = require('express')
const router = express.Router()

const providerController = require('../controllers/providerController')

router.post('/providers/', providerController.createProvider)
router.get('/providers', providerController.findAllProviders)
router.get('/providers/:providerId', providerController.findOneProvider)
router.patch('/providers/:providerId', providerController.updateOneProvider)

module.exports = router