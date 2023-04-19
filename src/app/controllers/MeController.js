const Course = require('../models/Course')
const dateFormat = require('date-fns')
// const Article = require('../models/Article')
class MeController {

    //[GET] /me/stored/courses
    showMyCourses(req, res, next) {
        Course.find({}).lean()
            .then((courses) => {
                res.render('me/stored-courses', { 
                    courses: courses.map(course => ({
                        ...course,
                        createdAt: dateFormat.format(course.createdAt, 'dd-MM-yyyy')
                    }) 
                    ) 
                })
            })
            .catch(next)
    }

    //[GET] /me/stored/articles
    showMyArticles(req, res, next) {
        
    }

    //[GET] /me/trash/courses
    trashCourses(req, res, next){
        Course.findDeleted({}).lean()
            .then((courses) => {
                res.render('me/in-trash-courses', { 
                    courses: courses.map(course => ({
                        ...course,
                        createdAt: dateFormat.format(course.createdAt, 'dd-MM-yyyy')
                    }) 
                    ) 
                })
            })
        .catch(next)
    }

}

module.exports = new MeController();
