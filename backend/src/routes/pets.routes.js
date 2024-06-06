import {Router} from 'express'
import { cargarImagem, deletePets, getPets, getPetsById, setPets, updatePets } from '../controllers/pets.controller.js'


const router = Router()

router.get('/mascotas', getPets)
router.post('/mascotas',cargarImagem, setPets)
router.get('/mascotas/:id', getPetsById)
router.put('/mascotas/:id', cargarImagem, updatePets)
router.delete('/mascotas/:id', deletePets)


export default router
