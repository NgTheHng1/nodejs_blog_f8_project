const Course = require("../models/Course");
const Post = require("../models/Post");


class SiteController {
    //[GET] /home
    home(req, res, next) {
        
        Course.find({}).lean()
            .then(courses => res.render('home',{ courses }))
            .catch(next)

    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }

    
}

module.exports = new SiteController();
