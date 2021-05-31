const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
const cors = require('cors')
const apiRouter = require('./api/apiRouter')
const port = 3000
//configure urlencod
const jsonParser = express.json()
const urlEncodedParser = express.urlencoded({extended : true});
app.use(jsonParser)
app.use(urlEncodedParser)

//configure cors
app.use(cors())

//Configure the Router
app.use('/api', apiRouter)

//get
app.get('/', (req, res) => {
  res.send('<h2>Welcome from Express Server')
})

app.listen(port, () => {
  console.log(`Express server is running at http://127.0.0.1:${port}`)
})