const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/favicon.ico', express.static('favicon.ico'));

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}s`)
})