var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 80;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/messaging', function (req, res) {
    
    var clientRequestId = req.param('clientRequestId', 'Not Provided');

    var response = {
        "platformId": 28380871,
        "domainId": 12520225,
        "owner": "qui enim",
        "status": "officia dolore cupidatat reprehenderit",
        "activationDate": "dolor velit minim do",
        "accountId": -21241144,
        "clientRequestId": clientRequestId
    }

    res.send(response)
});

app.post('/messaging', function (req, res) {
    
    //var clientRequestId = req.param('clientRequestId', 'Not Provided');
    var clientRequestId = req.query.clientRequestId;
    
    console.log(req.body);
    //console.log(req.body.clientInfo.apiAccessKey);
    //console.log(req.body.request);
    console.log("");
    console.log(req.body.request[0]);
    console.log(req.body.request[0].platformId);
   var platformId = req.body.request[0].platformId;
   var domainId = req.body.request[0].data.domain;
   var accountId = req.body.request[0].data.accountId;
   console.log(platformId, domainId, accountId);
   
    
  //console.log(platformId.toString());

    var response = {
        "platformId": platformId,
        "domainId": domainId,
        "owner": "qui enim",
        "status": "officia dolore cupidatat reprehenderit",
        "activationDate": "dolor velit minim do",
        "accountId": accountId,
        "clientRequestId": clientRequestId
    }

    res.send(response);
    
})

app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT + '!');
})