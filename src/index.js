const express = require('express')
const app = express()

app.get('/projects', (req, res) => {
  return res.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ])
})

app.post('/projects', (req, res) => {
  const { name } = req.body
  return res.status(201).json({
    message: name
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Running on port: http://localhost:${port}`)
})