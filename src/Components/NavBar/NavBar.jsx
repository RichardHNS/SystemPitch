import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav>
            <ul className='NavBar'>
                <li> <Link to="/">Quem Somos</Link></li>
                <li> <Link to="/Problematica">Problemática</Link></li>               
                <li> <Link to="/Solucao">Solução</Link></li>
                <li> <Link to="/Validacao">Validações</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar