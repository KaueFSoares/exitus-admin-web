import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Registros</Link>
        <Link to="/student">Alunos</Link>
        <Link to="/reponsible">Responsáveis</Link>
        <Link to="/leave">Saídas</Link>
    </div>
  )
}

export default Header