const path= require('path')
const express= require('express')
const app= express()
const port = process.env.PORT || 3000;
const fs = require('fs');


const entry = fs.readFileSync(
  path.resolve(__dirname, 'dist/index.html'),
  'utf8',
)

app.use(express.static('dist'));

app.use('*', (req, res) => res.send(entry));

app.listen(port, ()=>{
  console.log("Server started")
})