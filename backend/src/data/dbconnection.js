const mongoose = require('mongoose');
let connected = false;

module.exports.startConnection = () => {
    const db = mongoose.connection;
    mongoose.connect('mongodb://localhost:27017/periodic-table', {useNewUrlParser: true, useUnifiedTopology: true});
    db.once('open', () => {
        connected = true;
        console.log('MongoDB connection stablished');
    });
}