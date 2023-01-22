const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const answerSchema = new Schema({
    choice: {
      type: Number,
      min: 0,
      required: true
    },
    question: {
      type: Schema.Types.ObjectId,
      ref: 'Question'
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  });
  const Answer = mongoose.model('Answer', answerSchema);
  module.exports = Answer;