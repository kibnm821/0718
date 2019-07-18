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

app.use('/', router);