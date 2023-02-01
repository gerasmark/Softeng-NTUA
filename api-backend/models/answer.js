const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const answerSchema = new Schema({
            questionnaireID: { type: String, required: true },
    answers: [{
    optID: {
      type: String
    },
    qID: {
      type: String
    }}],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }}
    , {
      versionKey: false
  });
  const Answer = mongoose.model('Answer', answerSchema);
  module.exports = Answer;