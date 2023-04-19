const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);

router.get('/transactions', function(req, res){
    res.json([
        1, 2, 3, 4, 5
    ])
})

router.get('/', siteController.home);

module.exports = router;
