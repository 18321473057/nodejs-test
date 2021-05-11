const express = require('express')
const rout = require('./rout')
const app = express()
app.engine('html', require('express-art-template'));

app.use(express.static('public'))
app.use(rout);
const port = 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




// view engine setup
// app.set('view options', {
//     debug: process.env.NODE_ENV !== 'production'
//  });
// app.set('view engine', 'art');

// routes