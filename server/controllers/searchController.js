/**
 * Created by MikeTran on 11/15/16.
 */
const searchModel = require('../models/searchModel');

function getInstaResults(req, res) {
    searchModel.searchTag(req.body, res);
}

module.exports = {
    getInstaResults: getInstaResults,
};
