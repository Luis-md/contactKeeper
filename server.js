const express = require('express')
const users = require('./routes/users')
const auth = require('./routes/auth')
const contacts = require('./routes/contacts')

const app = express();


app.get('/', (req, res) => {
    res.json({ msg: "Hello world" })
})

//DEFINE ROUTES

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})