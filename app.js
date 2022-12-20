// require related modules used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const generatePW = require('./pw_generate')
const port = 3000

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// use body-parser
app.use(bodyParser.urlencoded({ extend: true }))

// localhost:3000
app.get('/', (req, res) => {
  // res.send('This will be a random password generator')
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const pw = generatePW(req.body)
  console.log('req.body', req.body)
  console.log(pw)
  res.render('index', { pw, options: options })
})

app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})
