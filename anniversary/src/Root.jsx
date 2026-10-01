import { StrictMode, useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import App from './App.jsx'

gsap.registerPlugin(ScrollTrigger)

function Root() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    })

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      console.log(e)
      ScrollTrigger.update()
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <StrictMode>
      <App />
    </StrictMode>
  )
}

export default Root
