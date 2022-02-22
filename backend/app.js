//EXPRESS SERVER
const express = require('express')

// providing a Connect/Express middleware that can be used to enable CORS with various options.
const cors = require('cors')

// indicating that this package has built-in type declarations.
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())

//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use('/public', express.static('public'));

//like bodyparser for the requests
app.use(express.json())

//This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }))


//This library makes it trivial to log all incoming & outgoing requests & responses using Monolog.
const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---------------------')
    next()
}
app.use(requestLogger)

//USING ROUTES
const userRoutes = require('./Server/routes/userRoutes.js')
const categoryRoutes = require('./Server/routes/categoryRoutes.js')
const subCategoryRoutes = require('./Server/routes/subCategoryRoutes.js')
const tutorialRoutes = require('./Server/routes/tutorialRoutes.js')
const lessonRoutes = require('./Server/routes/lessonRoutes.js')
const trainerRoutes = require('./Server/routes/trainerRoutes.js')
const chatRoutes = require('./Server/routes/chatRoutes')

app.use('/users', userRoutes)
app.use('/categories', categoryRoutes)
app.use('/subCategories', subCategoryRoutes)
app.use('/tutorials', tutorialRoutes)
app.use('/lessons', lessonRoutes)
app.use('/trainers', trainerRoutes)
app.use('/chats', chatRoutes)



const errorHandler = (error, request, response, next) => {
    console.error("Error Handler: ", error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    }
    else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
    else {
        return response.status(400).json({ error: error.message })
    }
    next(error)
}
// This has to be the last loaded middleware.
app.use(errorHandler)

app.listen(port, () => console.log(`Listening on port ${port}`))