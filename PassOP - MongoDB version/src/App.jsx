import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar />
    <div className='mx-auto max-w-3/4'>
    <div className="min-h-[87vh] ">
    <Manager />
    </div>
    </div>
    <Footer />
    </>
  )
}

export default App
