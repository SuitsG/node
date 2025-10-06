const express = require('express')
const app = express()

// Elimina la cabecera que muestra que se usando Express
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  let body = ''

  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    req.body = data
    next()
  })
})

app.get('/', (req, res) => {
  res.send('<h1>Mi pagina web</h1>')
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

// Importante: Esta ruta debe ir al final, ya que si no, capturará todas las rutas
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>')
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
