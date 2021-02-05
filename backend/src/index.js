const express = require('express');
const path = require('path');

const {mongoose} = require('./database');

const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Static files

//Routers
app.use('/business',require('./routes/business.routes')); 
app.use('/owners',require('./routes/owners.routes'));
app.use('/products',require('./routes/products.routes'));



//Starting server
app.listen(app.get('port'), () => {
    console.log('server on port' + app.get('port'));
});