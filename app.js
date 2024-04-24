import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'

const app = express()
app.use(json())
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.json({ message: 'hola mundo' })
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})

// Metodos normales: GET/HEAD/POST
// Metodos complejos: PUT/PATCH/DELETE

// CORS PRE-Flight
// OPRTIONS

app.use('/movies', moviesRouter)
