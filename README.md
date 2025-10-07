# Proyecto Node.js con Express

## Inicialización del proyecto

```bash
npm init -y
```

## Instalación de Express

```bash
npm install express -E
```

## Ejecución del proyecto

```bash
npm run dev:1
```

## package.json

Agregar watch para agregar el modo watch y no estar reiniciado el proceso manualmente

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev:1": "node --watch app.js",
    "dev:2": "node --watch apiRest.js"
  }
```


## Gestion de apis
Para cadenas
```
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
```

para areglos
```
app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})
```

## Configuración de seguridad

Para ocultar el header que identifica Express:

```javascript
app.disable('x-powered-by');
```

> **Nota:** Esto mejora la seguridad al no exponer información sobre el framework utilizado.