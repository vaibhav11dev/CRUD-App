//Setup Express App
    // const experess = require('express')
import express from 'express'
const app = express()
const port = process.env.PORT || '3000'

//Database Connection
const DATABASE_URL = process.env.DB_URL || 'mongodb://localhost:27017'
import connectDB from './db/connectdb.js'
connectDB(DATABASE_URL);

//Static File
import {join} from 'path'
app.use('/student', express.static(join(process.cwd(), 'public')))
app.use('/student/edit', express.static(join(process.cwd(), 'public')))

//Set template engine
app.set('view engine', 'ejs');

//Set urlencoded Midleware
app.use(express.urlencoded({extended:false}));

//Load Routes
import web from './routes/web.js'
app.use('/student', web)

app.listen(port, () => {
    console.log(`Server listining at http://localhost:${port}`)
})