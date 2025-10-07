const express = require('express') // require -> commonJS
const movies = require('./movies.json')
const crypto = require('node:crypto')
const z = require('zod')

const app = express()
app.use(express.json())
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.json({ message: 'Hola mundo' })
})

app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.toLowerCase() === genre.toLowerCase()
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === parseInt(id))
  if (movie) return res.json(movie)
  res.status(404).json({ message: 'Movie not found' })
})

// Ejemplos de uso de POST
app.post('/movies', (req, res) => {
  const {
    title,
    year,
    genre,
    director,
    rating,
    duration,
    description
  } = req.body

  const newMovie = {
    id: crypto.randomInt(1, 1000000),
    title,
    year,
    genre,
    director,
    rating,
    duration,
    description: description ?? 0
  }

  movies.push(newMovie)
  res.status(201).json(newMovie)
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`)
})
