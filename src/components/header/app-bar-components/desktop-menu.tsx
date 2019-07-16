import * as React from 'react'
import { Menu, MenuItem, CircularProgress } from '@material-ui/core'

import { Link } from '../../common'

interface IDesktopMenuProps {
  isAuth: boolean
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
  anchorEl: null | HTMLElement
  menuId: string
  isMenuOpen: boolean
  handleMenuClose: () => void
}

export const DesktopMenu: React.FC<IDesktopMenuProps> = props => {
  const { anchorEl, menuId, isMenuOpen, handleMenuClose, isAuth } = props
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isAuth ? (
        <>
          <Link to="/profile">
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          </Link>
          <Link to="/logout">
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Link>
        </>
      ) : (
        <>
          <Link to="/login">
            <MenuItem onClick={handleMenuClose}>Signin</MenuItem>
          </Link>
          <Link to="/register">
            <MenuItem onClick={handleMenuClose}>Signup</MenuItem>
          </Link>
        </>
      )}
    </Menu>
  )
}
