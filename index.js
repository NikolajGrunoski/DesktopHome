var express = require('express');
var hbs = require('express-hbs');
var laptops = require('./handlers/laptops')

var app = express();

app.engine('hbs', hbs.express4({
    // partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


app.listen(8080, (err) => {
    if (err) {
        return console.log('Could not find server');
    }
    return console.log('Server succesfully started')
});

app.get('/laptop', laptops.GetLaptops);
app.get('/mackbook', laptops.GetMackBook);