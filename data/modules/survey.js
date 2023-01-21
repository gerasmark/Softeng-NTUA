import mongoose from 'mongoose'

const surveySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  questions: [{
    type: String,
    required: true
  }],
  creator: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Survey = mongoose.model('Survey', surveySchema)  
export default Survey
//module.exports = Survey