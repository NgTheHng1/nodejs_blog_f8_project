const Course = require('../models/Course')
const slugify = require('slugify')
class CourseController {
    //[GET] /courses
    index(req, res, next) {
        Course.find({}).lean()
            .then(courses => res.render('home', { courses }))
            .catch(next)
    }

    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
            .then((course) => {
                res.render('courses/show', { course })
            })
            .catch(next)
    }

    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then(course => res.render('courses/edit', {
                course
            }))
            .catch(next)
    }

    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    //[POST] /courses/pending-course-create
    pending(req, res, next) {
        const dataForm = { ...req.body }
        dataForm.image = `https://picsum.photos/${dataForm.image}`
        dataForm.deleted = false
        dataForm.deletedAt = null
        dataForm.slug = slugify(req.body.name) + ' '+ Math.trunc(Math.random() * 1000000)
        const course = new Course(dataForm)
        course.save()
            .then(courseReturn => res.redirect('/courses/' + courseReturn.slug))
            .catch(next)
    }

    //[PUT] /courses/:id/update
    async update(req, res, next) {

        Course.updateOne(
            { _id: req.params.id },
            { ...req.body, slug: slugify(req.body.name) + '-' + Math.trunc(Math.random() * 1000000) },
        )
            .then(() => {
                res.redirect('/me/stored/courses')
            })
            .catch(next)
    }

    //[DELETE] /courses/:id/delete
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[DELETE] /courses/:id/delete-permanently
    deletePermanently(req, res, next) {
        Course.findOneAndDelete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[PATCH] /:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

}

module.exports = new CourseController();
