const express = require('express')
const router = express.Router()

const hirerController = require('../controllers/hirerController')

router.post('/hirers', hirerController.createOneHirer)
router.get('/hirers', hirerController.findAllHirers)
router.get('/hirers/:hirerId', hirerController.findOneHirer)
router.patch('/hirers/:hirerId', hirerController.updateOneHirer)
router.delete('/hirers/:hirerId', hirerController.softDeleteOneHirer)
router.delete('/hirers/destroy/:hirerId', hirerController.destroyOneHirer)

module.exports = router