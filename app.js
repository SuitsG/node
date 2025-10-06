const express = require('express')
const app = express()

// Elimina la cabecera que muestra que se usando Express
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.use(express.json())

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
