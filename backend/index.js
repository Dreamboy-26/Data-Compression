const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const USER = require('./modals/userSchema')
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/dataCompression').then(() => {
  console.log('connected')
})

app.use(cors())

app.get("/",(req,res)=>{
  console.log("hello")
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
  const { userName } = req.body

  USER.findOne({ userName: userName }).then((saved) => {
    if (saved) {
      res.json(saved)
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

app.listen('5000', () => {
  console.log('server connected to port')
})
