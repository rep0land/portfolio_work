
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CustomCursor from './components/shared/Cursor'
import Header from './components/shared/Header'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import MyWork from './pages/MyWork'
import Contact from './pages/Contact'
import ThreeBackground from './components/shared/ThreeBackground'
import { useEffect, useState } from 'react'

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='app'>
    <CustomCursor />
    <ThreeBackground />
    <div>
      {
        isLoading
          ? <p className='loading'>Loading... </p>
          : (
            <>
              <div>
                <Header />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/AboutMe' element={<AboutMe />} />
                  <Route path='/Skills' element={<Skills />} />
                  <Route path='/MyWork' element={<MyWork />} />
                  <Route path='/Contact' element={<Contact />} />
                </Routes>
              </div>
            </>
          )
      }
    </div>
  </div>

  )
}

export default App
