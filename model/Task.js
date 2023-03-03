const mongoose = require('mongoose')
const validaotr = require('validator')

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
    unique:true
  },
  isCompleted: {
    type:Boolean,
    default:false,
    
  },
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
