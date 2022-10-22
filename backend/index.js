const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const USER = require('./modals/userSchema')
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions))
app.use(express.json())
mongoose
  .connect(
    'mongodb+srv://pankajkumar:pankajkumar@cluster0.mgmhbkt.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('connected')
  })


app.get('/', (req, res) => {

  res.send('hello')
})

let number = 100

app.post('/signup', (req, res) => {
  number++
  const userData = req.body

  const name = userData.name.slice(0, 2)
  const pass = userData.password.slice(-4)

  let uniqueId = name + pass + number

  const user = new USER({ ...userData, userName: uniqueId })

  user.save()
  res.json(user)
})

app.post('/login', (req, res) => {
  const { userName,password } = req.body

  USER.findOne({ userName: userName }).then((saved) => {
    if (saved) {
      if(saved.password==password){
        res.json(saved)

      }
    } else {
      res.json('user not found')
    }
  })
})

app.get('/user/:id', (req, res) => {
  const user = req.params.id

  USER.findOne({ userName: user }).then((saved) => {
    if (saved) {
      res.json(saved)
    }
  })
})

app.listen(process.env.PORT || "6002", () => {
  console.log('server connected to port')
})
