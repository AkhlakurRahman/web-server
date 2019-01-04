const express = require('express');
const hbs = require('hbs');

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (rep, res) => {
    res.render('index.hbs', {
        pageTitle: 'Home Title',
    });
});

app.get('/about', (rep, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Title',
    });
});

app.listen(3000);