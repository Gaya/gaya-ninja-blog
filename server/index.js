var app = require('express')();
var mail = require("./mail.js");
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');

//parse form data
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact', mail);

app.use(serveStatic(__dirname + '/../public/', {'index': ['index.html']}));

app.listen(process.env.PORT || 5000);
