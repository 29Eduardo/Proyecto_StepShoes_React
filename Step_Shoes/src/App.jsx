import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Servicios from './components/Servicios'
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
