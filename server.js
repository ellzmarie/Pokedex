// Dependencies 
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const pokemon = require('./models/pokemon.js');

require('dotenv').config()

const PORT = process.env.PORT

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// DATABASE CONNECTION LOGS
const db = mongoose.connection
db.on('error', (err) => console.log(err.message))
db.on('connected', () => console.log("mongo connected"))
db.on('disconnected', () => console.log("mongo disconnected"))

app.use(express.urlencoded(({extended:false})))

// INDUCE
// INDEX
app.get('/pokedex', (req, res) => {
    res.render('index.ejs', {
        allPokemon: pokemon,
        title: 'index'
    })
})

// NEW


// DELETE / DESTROY

// UPDATE

// CREATE

// EDIT

// SHOW


// Listener
app.listen(PORT, () => console.log(`you are listening to port ${PORT}...`))