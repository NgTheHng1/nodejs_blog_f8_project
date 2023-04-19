const coursesRouter = require('./courses')
const meRouter = require('./me')
const loginRouter = require('./login')
const siteRouter = require('./site')

function route(app) {
    app.use('/me', meRouter)
 
    app.use('/courses', coursesRouter)
 
    app.use('/login', loginRouter)

    app.use('/', siteRouter)

    app.get('/test-handlebars', (req, res) => {
        res.render(`employee/employee`, {
            layout: 'secondLayouts/second',
        })
    })
}

module.exports = route
