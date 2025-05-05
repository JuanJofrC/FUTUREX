"use client"

import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Navbar.css"

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(false)
  const [lMode, setlMode] = useState(false)

  let username = localStorage.getItem("username")
  if (username) {
    username = username.charAt(0).toUpperCase() + username.slice(1)
  }

  useEffect(() => {

    const isDarkMode = document.body.classList.contains("dark-mode")
    setDarkMode(isDarkMode)


    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setDarkMode(document.body.classList.contains("dark-mode"))
        }
      })
    })

    observer.observe(document.body, { attributes: true })


    return () => observer.disconnect()
  }, [])


  const togglelMode = () => {
    if (lMode) {
      document.body.classList.remove("l-mode")
    } else {
      document.body.classList.add("l-mode")
    }
    setlMode(!lMode)
  }


  const handleLogout = () => {
    localStorage.removeItem("username")
    navigate("/")
    window.location.reload()
  }

  return (
    <nav className={`navbar ${darkMode ? "dark-mode" : ""} ${lMode ? "l-mode" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/characters">
            <span className="logo-text">FUTURAMA</span>
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Links */}
          <div className="navbar-links">
            <Link to="/characters" className={location.pathname === "/characters" ? "active" : ""}>
              Personajes
            </Link>
            <Link to="/form" className={location.pathname === "/form" ? "active" : ""}>
              Formulario
            </Link>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
              ¿Quiénes somos?
            </Link>
          </div>

        {/* Bienvenida */}
          {username && (
            <div className="user-info">
              <span className="username">¡Bienvenido a bordo, {username}!</span>


{/* Botón de Modo Light */}
<button onClick={togglelMode} className={`l-mode-button ${lMode ? "active" : ""}`}>
            Entregar paquete
          </button>
          
{/* Botón de Logout */}
              <button onClick={handleLogout} className="logout-button">
                Expulsar de la nave
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
