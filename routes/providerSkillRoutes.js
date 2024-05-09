const express = require('express')
const router = express.Router()

const providerSkillController = require('../controllers/providerSkillController')

router.post('/providerSkills', providerSkillController.createOneProviderSkill)
router.get('/providerskills', providerSkillController.findAllProviderSkills)
router.get('/providerskills/:providerId/:skillId', providerSkillController.findOneProviderSkill)
router.patch('/providerskills/:providerId/:skillId', providerSkillController.updateOneProviderSkill)
router.delete('/providerskills/:providerId/:skillId', providerSkillController.softDeleteOneProviderSkill)
router.delete('/providerskills/destroy/:providerId/:skillId', providerSkillController.destroyOneProviderSkill)

module.exports = router