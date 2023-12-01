const express = require('express')
const app = express()
const port = 3000
const path = require('path');


app.get('/', (req, res) => {
//   res.send('Hello World!')
 res.sendFile(path.join(__dirname,'a.html'
));
})

app.listen(port, () => {
  console.log('Up')
})