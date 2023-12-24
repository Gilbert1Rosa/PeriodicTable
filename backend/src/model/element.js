const mongoose = require('mongoose');
const elementSchema = new mongoose.Schema({
    symbol: String,
    name: String,
    atomicNumber: String,
    atomicWeight: String,
    electronicConfiguration: String,
    period: Number,
    group: Number,
});

module.exports.Element = mongoose.model('Element', elementSchema);