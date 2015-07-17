// require('node-jsx').install({ extension:'.jsx' });

var fs = require('fs');
var express = require('express');
var React = require('react');
var Handlebars = require('handlebars');
// var Promise = require('es6-promise').Promise;

var component = require('./src/components/locations.jsx');

var source = fs.readFileSync('./layouts/index.hbs', 'utf8');
var template = Handlebars.compile(source);
var app = express();

var renderIndex = function renderIndex(req, res) {

    var locations = React.createFactory(component);
    var bootstrapData = {
        locations: [
            { id: 0, name: 'Abu Dhabi' },
            { id: 1, name: 'Berlin' },
            { id: 2, name: 'Bogota' },
            { id: 3, name: 'Buenos Aires' },
            { id: 4, name: 'Cairo' },
            { id: 5, name: 'Chicago' },
            { id: 6, name: 'Lima' },
            { id: 7, name: 'London' },
            { id: 8, name: 'Miami' },
            { id: 9, name: 'Moscow' },
            { id: 10, name: 'Mumbai' },
            { id: 11, name: 'Paris' },
            { id: 12, name: 'San Francisco' }
        ]
    };

    var data = {
        name: 'React Server Rendering',
        bootstrapData: JSON.stringify(bootstrapData),
        content: React.renderToString(locations(bootstrapData))
    };

    res.setHeader('Content-Type', 'text/html');
    res.send(template(data));
};

app.use(express.static(__dirname + '/public'));
app.get('/', renderIndex);
app.listen(3002);
