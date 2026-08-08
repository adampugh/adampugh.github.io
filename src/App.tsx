import './App.scss'
import { useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import PageLoader from './components/PageLoader'
import Projects from './components/Projects'

const App = () => {
  // The model itself preloads regardless of when <main> mounts (that
  // kicks off at import time in Skull/index.tsx), so this delay doesn't
  // slow anything down — it just holds off mounting the scroll-triggered
  // entrance animations (fade-ins, letter reveals) until the loader is
  // actually about to reveal them. Mounting them immediately alongside
  // the loader made them fire and finish while still hidden behind it.
  const [isAppReady, setIsAppReady] = useState(false)

  return (
    <>
      <PageLoader onReady={() => setIsAppReady(true)} />
      {isAppReady && (
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
      )}
    </>
  )
}

export default App
