# Proyecto Node.js con Express

## Inicialización del proyecto

```bash
npm init -y
```

## Instalación de Dependencias

### Express
Manejo de rutas

```bash
npm install express -E
```

### Zod
Validación de datos

```bash
npm install zod -E
```

Validacion de enum array
```
genre: z.array(
    z.enum(['Action', 'Adventure', 'Drama', 'Fantasy', 'Horror']),
    {
        required_error: 'Movie genre is required.',
        invalid_type_error: 'Movie genre must be an array of enum Genre'
    }
)
```

### Instalacion de cors
```
npm install -E
```

## Ejecución del proyecto

```bash
npm run dev:1
```
## Ejecucion web

```
npx servor ./web
```

## package.json

Agregar watch para el modo watch y no reiniciar el proceso manualmente:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev:1": "node --watch app.js",
    "dev:2": "node --watch apiRest.js"
}
```

## Gestión de APIs

### Filtrado con cadenas

```javascript
app.get('/movies', (req, res) => {
    const { genre } = req.query
    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.toLowerCase() === genre.toLowerCase() // Como es una cadena usa toLowerCase()
        )
        return res.json(filteredMovies)
    }
    res.json(movies)
})
```

### Filtrado con arreglos

```javascript
app.get('/movies', (req, res) => {
    const { genre } = req.query
    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()) //Usa some para areglos
        )
        return res.json(filteredMovies)
    }
    res.json(movies)
})
```

### Generación de ID string

```javascript
const newMovie = {
    id: crypto.randomUUID(), // Genera un id string uuid v4
    title,
    year,
    genre,
    director,
    rating,
    duration,
    description: description ?? 0
}
```

### Generación de ID entero

```javascript
const newMovie = {
    id: crypto.randomInt(1, 1000000), // Genera un id entero
    title,
    year,
    genre,
    director,
    rating,
    duration,
    description: description ?? 0
}
```

## Formas de usar dependencias

### CommonJS

```javascript
const express = require('express') // require -> commonJS
```

## Configuración de seguridad

Para ocultar el header que identifica Express:

```javascript
app.disable('x-powered-by');
```

> **Nota:** Esto mejora la seguridad al no exponer información sobre el framework utilizado.