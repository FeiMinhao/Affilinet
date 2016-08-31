var mongoose = require('mongoose');
var setting = require('../setting.js');
mongoose.createConnection('mongodb://localhost/'+setting.database);

var FeedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    subtitle: String,
    feedback: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
