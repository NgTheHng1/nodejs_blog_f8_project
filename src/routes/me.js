const express = require('express')
const router = express.Router()
const meController = require('../app/controllers/MeController')

// router.post('/store', meController.store)

router.get('/stored/courses', meController.showMyCourses)

router.get('/trash/courses', meController.trashCourses)

router.get('/stored/articles', meController.showMyArticles)

module.exports = router
