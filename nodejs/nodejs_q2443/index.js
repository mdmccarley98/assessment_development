import express from 'express'
import fs from 'fs'

const app = express()
const fsPromises = fs.promises

app.get('/download', (req, res, next) => {
    fsPromises.readFile('./file-not-exists.txt')
    .then(data => res.send(data))
    .catch(err => next(err))
})

app.use((err, req, res, next) => {
  console.log('Error middleware - One')
  next(err)
})

app.use((err, req, res, next) => {
  console.log('Error middleware - Two')
  res.status(500);
  res.send('Internal Server Error');
})

app.use((err, req, res, next) => {
  console.log('Error middleware - Three')
})
app.listen(3009)