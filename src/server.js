//server.js
'use strict'

//first we import our dependencies…
var express = require('express');
var bodyParser = require('body-parser');
//and create our instances
var app = express();
var router = express.Router();

const sgMail = require('@sendgrid/mail');
//var user = 'consultantspmeoutaouais';
//var password = 'Be473918$';
var key = '';
sgMail.setApiKey(key);

//set our port to either a predetermined port number if you have set 
//it up, or 3001
//var port = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    //and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

//adding the /mail route to our /api router
//router.route('/mail')
router.post('/mail', async (req, res) => {

        let table = '';
        req.body.qa.map( (row, index) => {
            table += '<tr key={index}><td>' + row.q + '</td><td>' + row.a + '</td></tr>';
        });

        const msg = {
            to: 'benoit.bellefontaine@gmail.com',
            from: 'noreply@consultantspmeoutaouais.ca',
            subject: 'Courriel du site consultantspmeoutaouais.ca',
            text: 'nom source: ' + req.body.name + '\nadresse courriel source: ' + req.body.email + 
            '\ntexte source: ' + req.body.message,
            html: 
                '<head><style>td,th{padding:5px;border-bottom:1px solid #ddd;}' + 
                'tr:hover {background-color: #f5f5f5;}</style></head>' +
                '<body><div style="width:1000%;margin:0 auto">' +
                    '<table>' +
                    '<tr><td style="border-right:1px solid #f5f5f5"><strong>nom:</strong></td><td>' + req.body.name + '</td></tr>' +
                    '<tr><td style="border-right:1px solid #f5f5f5"><strong>adresse courriel:</strong></td><td>' + req.body.email + '</td></tr>' +
                    '<tr><td style="border-right:1px solid #f5f5f5"><strong>téléphone:</strong></td><td>' + req.body.tel + '</td></tr>' +
                    '<tr><td style="border-right:1px solid #f5f5f5"><strong>message:</strong></td><td>'+ req.body.message + '</td></tr>' +
                    '</table></div><hr/>' +
                    '<div style="width:100%;text-align:left"><table><tr><th>Questions</th><th>Réponses</th></tr>' + table + '</table></div>' +
                '</div></body>'
        };

        /*sgMail.send(msg, function(err, json) {
            if (err) { 
                console.log('error sending email');
                return res.send('error'); 
            }
            console.log('email sent successfully to ' + msg.to);
            res.send('success');
        });*/

        await sgMail
        .send(msg)
        .then(result => {
            res.status(200).send(result);
            console.log('email sent successfully to ' + msg.to);
        })
        .catch(error => {
            res.status(400).send(error);
        });

    });

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(3001, function() {
    console.log(`api running on port 3001`);
});
