/**
 * Created by MikeTran on 11/15/16.
 */
var router = require('express').Router();
var searchController = require('../controllers/searchController');

router.post('/search/Instagram', searchController.getInstaResults);

module.exports = router;
