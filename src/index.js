// const path = require('path')
// const express = require('express')
// const morgan = require('morgan')
// const handlebars = require('express-handlebars')

const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const handlebars = require('express-handlebars')
const port = 3000

const contentContainer = ''
const viewConfig = {}

//HTTP logger when there is htttp request, type 'common'
app.use(morgan('common'))

//Set static file that browser can read and client can access
app.use(express.static(path.join(__dirname, 'public')))

//Template engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    partialsDir: path.join(__dirname, 'resources/views/partials/')
}))//set the engine 'handlebars: hbs' value returned from handlebars.engine()

app.set('view engine', 'hbs')//set 'view engine' of 'app' is 'hbs'
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    res.render(`login`)
})

app.get('/test-handlebars', (req, res) => {
    res.render(`employee/employee`, {
        layout: 'secondLayouts/second',
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function setPartialsDir(dir){
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
        partialsDir: path.join(__dirname, `resources/views/partials/${dir}`)
    }))
}