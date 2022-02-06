const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const router = require('./routes/routes')

var PORT = process.env.port || 8081

app.listen(PORT, function(error){
    if (error) throw error
    console.log("Server created Successfully on PORT", PORT);
})

// map routers to URLs
app.use('/', router);

module.exports = app;

/* 

    Can add custom error handler here if desired 
    app.use(errorHandler)

    static errorHandler(error, req, res, next) {
        // custom logic here 
        res.send(500) --> internal server error
    }
*/