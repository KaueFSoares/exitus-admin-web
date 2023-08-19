import React from 'react'
import { Link } from "react-router-dom"
import Text from '../../static/Text.ts'

const Header = () => {
  return (
    <div>
        <Link to="/register">{Text.navbar.register}</Link>
        <Link to="/student">{Text.navbar.students}</Link>
        <Link to="/reponsible">{Text.navbar.responsible}</Link>
        <Link to="/leave">{Text.navbar.leave}</Link>
    </div>
  )
}

export default Header