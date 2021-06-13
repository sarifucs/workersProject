const mongoose = require('mongoose');

const workerSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Worker', workerSchema);