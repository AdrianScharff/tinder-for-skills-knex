require('dotenv').config()

const express = require("express")
const providerRoutes = require('./routes/providerRoutes')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
 res.send('Hello world from Tinder-for-skills API 🛴')
})

app.use('/api/v1', providerRoutes)

app.listen(3000, () => {
 console.log("server running on http://localhost:3000 🛺");
})