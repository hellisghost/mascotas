import express from 'express'
import body_parser from 'body-parser'
import cors from 'cors'
import userRouter from './src/routes/users.routes.js'
import authRoutes from './src/routes/auth.routes.js'
import petsRoutes from './src/routes/pets.routes.js'
import categoriesRoutes from './src/routes/categories.routes.js'
import gendersRoutes from './src/routes/genders.routes.js'
import racesRoutes from './src/routes/races.routes.js'
import { validarToken } from './src/controllers/auth.controller.js'
const server = express()

server.use(body_parser.json())
server.use(body_parser.urlencoded({ extended: false }))
server.use(cors())

server.set('view engine', 'ejs')
server.set('views', './views')
server.use('/public', express.static('./public'))
server.get('/document', (req, res) => {
    res.render('document.ejs')
})
server.use(authRoutes)
server.use(validarToken, userRouter)
server.use(validarToken, petsRoutes)
server.use(validarToken, categoriesRoutes)
server.use(validarToken, gendersRoutes)
server.use(validarToken, racesRoutes)


server.listen(3000, () => {
    console.log('Server is running on port 3000')
})


