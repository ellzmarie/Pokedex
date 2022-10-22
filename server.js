// Dependencies 
const express = require('express')
const pokemonData = require('./models/pokemon.js');
const methodOverride = require('method-override');
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'));

require('dotenv').config()

const PORT = process.env.PORT

// INDEX
app.get('/pokemon', (req, res) => {
    // res.send(pokemonData)
    res.render('index.ejs', {
        allPokemon: pokemonData,
        title: 'index'
    })
})

// NEW
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
})

// DELETE / DESTROY
app.delete('/pokemon/:indexOfPokemon', (req, res) => {
    allPokemon.splice(req.params.indexOfPokemon, 1)
    res.redirect('/pokemon')
})

// UPDATE

// CREATE

// EDIT
app.get('/pokemon/:indexOfPokemon/edit', (req, res) => {
    res.render('edit.ejs', {
        allPokemon: pokemonData[req.params.indexOfPokemon],
        index: req.params.indexOfPokemon,
    })
    res.redirect('/pokemon')
})

// SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { 
        allPokemon: pokemonData[req.params.id] 
    });
});

// Listener
app.listen(PORT, () => console.log(`you are listening to port ${PORT}...`))