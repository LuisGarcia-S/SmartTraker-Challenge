const mongoose = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var validatePhone = function(phone) {
    var re = /^\d{10}$/;
    return re.test(phone)
};

const Schema = mongoose.Schema;
const post_dto = new Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true 
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
    },
    phone: {
        type: String,
        trim: true,
        validate: [validatePhone, 'Phone number must to have exactly 10 numbers'],

    },
    body: {
        type: String,
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', post_dto);
