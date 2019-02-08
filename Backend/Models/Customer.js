var mongoose = require('mongoose');
Schema = mongoose.Schema;


var Customer = new Schema({
    name: {
        type: String
    },
    city: {
        type: String
    },
    age: {
        type: Number
    }
});

module.exports = mongoose.model('Customer', Customer);