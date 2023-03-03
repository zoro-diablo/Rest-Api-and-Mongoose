const mongoose = require('mongoose')
const colors = require('colors')
const express = require('express')

const app = express()
app.use(express.json())

mongoose
  .connect('mongodb://127.0.0.1:27017/task')
  .then(() => console.log('Database is connected'))
  .catch((err) => console.log(err))

const userRoutes = require('./routes/user')
const taskRoutes = require('./routes/task')


app.use(userRoutes)
app.use(taskRoutes)

const port = process.env.PORT || 4040
app.listen(port, () => console.log(`Server is running at port ${port}`))


// async function db() {
//   try {
//     const task = new Task({
//       description: 'This is task 1',
//       isCompleted:true
//     })
//     await task.save()
//     console.log(task)
//   } catch (e) {
//     console.log(colors.red.underline.bold(e.message))
//   }
// }

// db()
