// /**
//  * Created by MikeTran on 11/15/16.
//  */
var request = require("request");
var searchModel = module.exports;


searchModel.searchTag = function( params, res) {
    var query = params.query;
    var options = {
        method: 'GET',
        url: 'https://api.instagram.com/v1/tags/'+query+'/media/recent',
        qs: {access_token: process.env.access_token},
        headers: {
            'postman-token': '7312b191-1c7e-df06-678b-3537f993d116',
            'cache-control': 'no-cache',
        }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(body);
            res.send(info.data);
        } else{
            res.send(error);
        }
    }
    request(options, callback);
};

