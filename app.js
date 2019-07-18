const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const path = require('path');
const router = express.Router();

app.use(express.static('public'))

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/Views/index.html'));
});

router.get('/Dropdowns', function (req, res) {
    res.sendFile(path.join(__dirname + '/Views/Dropdowns.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/Navbar', function (req, res) {
    res.sendFile(path.join(__dirname + '/Views/Navbar.html'));
});

router.get('/Navbar2', function (req, res) {
    res.sendFile(path.join(__dirname + '/Views/Navbar2.html'));
});

router.get('/Input', function (req, res) {
    res.sendFile(path.join(__dirname + '/Views/Input.html'));
});

router.get('/Input2', function (req, res) {
    res.sendFile(path.join(__dirname + '/Views/Input2.html'));
});

router.get('/action_page', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : '+req.query.username+', '+req.query.car)
});

router.get('/Try', function (req, res) {
    res.sendFile(path.join(__dirname + '/Views/Try.html'));
});

router.get('/Try1', function (req, res) {
    console.log(req.query);
    res.send('Request email : '+req.query.mail+'<br> Request pwd : '+req.query.pwd)
});

router.get('/Try2', function (req, res) {
    console.log(req.query);
    res.send('Request email : '+req.query.Select+'<br> Request pwd : '+req.query.Custon)
});

router.get('/Try3', function (req, res) {
    console.log(req.query);
    res.send('Request email : '+req.query.email+'<br> Request pwd : '+req.query.pwd+'<br> Request text :'+req.query.text)
});

app.use('/', router);