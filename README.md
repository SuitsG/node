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
    
## Configuración de seguridad

Para ocultar el header que identifica Express:

```javascript
app.disable('x-powered-by');
```

> **Nota:** Esto mejora la seguridad al no exponer información sobre el framework utilizado.