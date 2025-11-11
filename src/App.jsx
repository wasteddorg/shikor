import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function Nav({ current }) {
  return (
    <nav className="nav">
      <a className={current === '/' ? 'active' : ''} href="#/">Home</a>
      <a className={current === '/about' ? 'active' : ''} href="#/about">About</a>
      <a className={current === '/contact' ? 'active' : ''} href="#/contact">Contact</a>
    </nav>
  )
}

export default function App() {
  const getRoute = () => {
    const h = window.location.hash || '#/'
    // normalize to "/","/about","/contact"
    const path = h.replace(/^#/, '') || '/'
    return path
  }

  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onHash = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  let Page = <Home />
  if (route === '/about') Page = <About />
  if (route === '/contact') Page = <Contact />

  return (
    <div className="app">
      <header className="header">
        <div className="brand">Shikor.org</div>
        <Nav current={route} />
      </header>

      <main className="main">{Page}</main>

      <footer className="footer">© 2025 Shikor.org</footer>
    </div>
  )
}
