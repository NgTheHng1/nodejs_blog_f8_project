class NewsController {
    //[GET] /news
    index(res, req) {
        res.render(`news`);
    }

    //[POST] /news
    indexPost(res, req) {
        res.render(`news`);
    }
}

module.exports = new NewsController();
