// const path = require('path')
// const express = require('express')
// const morgan = require('morgan')
// const handlebars = require('express-hand')

const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const morgan = require('morgan')

const route = require('./routes')//If we type directory name, 'require' auto require 'index.js'
const db = require('./config/db')

//Connect database
db.connect()

const port = 3000
const app = express()

const contentContainer = ''
const viewConfig = {}


//--------------------USE----------------------//

//HTTP logger when there is htttp request, type 'tiny'
// app.use(morgan('tiny'))

//Parse request from client through POST method, using middleware 'body-parser' dependency
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//Override method GET, POST --> GET, POST, PUT, PATCH, DELETE,...
app.use(methodOverride('_method'))

//Set static file that browser can read and client can access
app.use(express.static(path.join(__dirname, 'public')))


//--------------------SET & ENGINE----------------------//


//set 'view engine' of 'app' is 'hbs'
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

//Template engine, set the engine 'handlebars: hbs' value returned from handlebars.engine()
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    partialsDir: path.join(__dirname, 'resources/views/partials/'),
    helpers: {
        sum: (...nums) => nums.reduce((total, num) => total + (+num || 0)),
    }
}))

//--------Routes definition for website----------//
route(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

function setPartialsDir(dir){
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
        partialsDir: path.join(__dirname, `resources/views/partials/${dir}`)
    }))
}