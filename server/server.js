const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors');
var bodyParse = require('body-parser');

const port = process.env.PORT || 3000;

var router = require('./config/routes');

app.use(cors());
app.use(bodyParse.json({limit: '50mb'}));
app.use(express.static('./client'));
app.use('/api', router);


app.get('*', function (request, response){
    response.sendFile(path.resolve('./client', 'index.html'));
});

app.listen(port, () => console.log('\033[34m🎟  Instagram-Search server listening on port: \033[0m', port) );
