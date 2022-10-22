// Dependencies 
const express = require('express')
const pokemonData = require('./models/pokemon.js');
const methodOverride = require('method-override');
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'));
app.use(express.static('/public'));

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
    pokemonData.splice(req.params.indexOfPokemon, 1),
    res.redirect('/pokemon')
})

// UPDATE
app.put('/pokemon/:indexOfPokemon', (req, res) => {
    let pokemonStats = {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        spattack: req.body.spattack,
        spdefense: req.body.spdefense,
        speed: req.body.speed
    }
    let editPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: req.body.type,
        stats: stats
    }
    pokemonData[req.params.indexOfPokemon] = editPokemon
    res.redirect('/pokemon')
})

// CREATE
app.post('/pokemon', (req,res) => {

    let pokemonStats = {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        spattack: req.body.spattack,
        spdefense: req.body.spdefense,
        speed: req.body.speed
    }
    let newPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: req.body.type,
        stats: stats
    }
    pokemonData.push(newPokemon)
    res.redirect('/pokemon')
})

// EDIT
app.get('/pokemon/:indexOfPokemon/edit', (req, res) => {
    res.render('edit.ejs', {
        allPokemon: pokemonData[req.params.indexOfPokemon],
        indexOfPokemon: req.params.indexOfPokemon,
    })
})

// SHOW
app.get('/pokemon/:indexOfPokemon', (req, res) => {
    res.render('show.ejs', { 
        allPokemon: pokemonData[req.params.indexOfPokemon] 
    });
});

// Listener
app.listen(PORT, () => console.log(`you are listening to port ${PORT}...`))