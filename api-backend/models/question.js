const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const questionSchema = new Schema({
    qID: {
        type: String,
        required: true
    },
    qtext: {
        type: String,
        required: true
    },
    required: {type: Boolean, default: false},
    options: [{
        optID: {
            type: String
        },
        opttxt: {type: String},
        nextqID: {
            type: Schema.Types.ObjectId,
            ref: 'Question'
        }
    }]
});
  const Question = mongoose.model('Question', questionSchema);
  module.exports = Question