const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/business';

mongoose.connect(URI)
    .then(db = console.log('BD is connect'))
    .catch(err => console.error(err));

module.exports = mongoose;

