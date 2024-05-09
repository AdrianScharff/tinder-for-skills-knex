require('dotenv').config()

const express = require("express")
const providerRoutes = require('./routes/providerRoutes')
const skillRoutes = require('./routes/skillRoutes')
const providerSkillRoutes = require('./routes/providerSkillRoutes')
const hirerRoutes = require('./routes/hirerRoutes')
const serviceRoutes = require('./routes/serviceRoutes')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world from Tinder-for-skills API 🛴')
})

app.use('/api/v1', providerRoutes)
app.use('/api/v1', skillRoutes)
app.use('/api/v1', providerSkillRoutes)
app.use('/api/v1', hirerRoutes)
app.use('/api/v1', serviceRoutes)

app.listen(3000, () => {
    console.log("server running on http://localhost:3000 🛺");
})