const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const engine = require('ejs-mate');

const urlencodedParser = bodyParser.urlencoded({
    extended: false
});
app.use(urlencodedParser);
app.use(express.static(__dirname + '/public'));

// set the view
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('blog')
})

app.get('/confirm', (req, res) => {
    res.render('confirm')
})

app.listen(8081);