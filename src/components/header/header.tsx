import * as React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => (
  <header>
    <Link to="/"> Home </Link>
    <Link to="/login"> Sign in </Link>
    <Link to="/profile"> Profile </Link>
    <Link to="/News"> Our news </Link>
  </header>
)
export default Header
