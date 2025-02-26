const express = require('express')
const app = express()
//const host = '0.0.0.0'
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/docker', (req, res) => {
    res.send('DOCKERIZE THIS !!!!!!!!!!!!!')
  })

app.get('/sendParam', (req,res)=>{
  const token = req.query.token
  console.log(token)
  res.send(`the following param was sent: ${token}`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
