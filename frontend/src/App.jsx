import React from 'react'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import ListarMascotas from './pages/ListarMascotas'
import CreatePets from './pages/CreatePets'
import ConsultaPets from './pages/consultaPets'
import Logout from './pages/Logout'
import PrivateRoutes from './utils/PrivateRoutes'
import EditPet from './pages/EditPet'

function App() {
  return (
    <Routes>
      <Route path='/' Component={Login} />
      <Route path='/logout' Component={Logout} />
      <Route element={<PrivateRoutes />} >
        <Route path='/inicio' Component={ListarMascotas} />
        <Route path='/create' Component={CreatePets} />
        <Route path='/consult/:id' Component={ConsultaPets}/>
        <Route path='/edit/:id' Component={EditPet}/>
      </Route>
    </Routes>
  )
}

export default App
