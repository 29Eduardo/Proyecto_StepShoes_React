import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Servicios from './components/Servicios'
import Nosotros from './components/Nosotros'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import Login from './components/Login'
import Registro from './components/Registro'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Home/>
        <Nosotros/>
        <Servicios/>
        <Galeria/>
        <Contacto/>
        <Login/>
        <Registro/>
      </div>
    </>
  )
}

export default App
