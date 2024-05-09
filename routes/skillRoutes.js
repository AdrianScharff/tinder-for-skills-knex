const express = require('express')
const router = express.Router()

const skillController = require('../controllers/skillController')

router.post('/skills', skillController.createSkill)
router.get('/skills', skillController.findAllSkills)
router.get('/skills/:skillId', skillController.findOneSkill)
router.patch('/skills/:skillId', skillController.updateOneSkill)
router.delete('/skills/:skillId', skillController.softDeleteOneSkill)
router.delete('/skills/destroy/:skillId', skillController.destroyOneSkill)

module.exports = router