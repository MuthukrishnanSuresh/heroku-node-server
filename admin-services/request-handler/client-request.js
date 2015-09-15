(function(){
    var express = require('express');
    var app = express();
    var repoConnect = require('./MongoDB.js');
    var bodyParser = require('body-parser');
    // Create application/x-www-form-urlencoded parser
    app.use(bodyParser.json());       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.post('/auth_login', function (req, res) {
        repoConnect.authorizeLogin('login', req.body, res);
    });
    app.post('/auth_signup', function(req, res){
        repoConnect.authorizeLogin('signup', req.body, res);
    });
    var server_port = 8080;
    var server_ip_address = '127.0.0.1';
    server = require('http').createServer(app);
    console.log(" on " + server_ip_address + ", server_port " + server_port)
    server.listen(server_port, server_ip_address, function(){
      console.log("Listening on " + server_ip_address + ", server_port " + server_port)
    });
})();