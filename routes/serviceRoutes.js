const express = require('express')
const router = express.Router()

const serviceController = require('../controllers/serviceController')

router.post('/services', serviceController.createOneService)
router.get('/services', serviceController.findAllServices)
router.get('/services/:serviceId', serviceController.findOneService)
router.patch('/services/:serviceId', serviceController.updateOneService)
router.delete('/services/:serviceId', serviceController.softDeleteOneService)
router.delete('/services/destroy/:serviceId', serviceController.destroyOneService)

module.exports = router