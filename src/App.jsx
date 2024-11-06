import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import NavbarUltimate from './NavbarUltimate'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NavbarUltimate/>
      <Hero />
      <Footer />
    </>
  )
}

export default App
