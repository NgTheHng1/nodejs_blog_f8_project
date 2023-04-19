const express = require('express')
const router = express.Router()
const courseController = require('../app/controllers/CourseController')

// router.post('/store', courseController.store)

router.post('/pending-course-create', courseController.pending)

router.get('/create', courseController.create)

router.get('/:id/edit', courseController.edit)

router.patch('/:id/restore', courseController.restore)

router.delete('/:id/delete-permanently', courseController.deletePermanently)

router.delete('/:id/delete', courseController.delete)

router.put('/:id', courseController.update)

router.get('/:slug', courseController.show)

router.get('/', courseController.index)

module.exports = router
