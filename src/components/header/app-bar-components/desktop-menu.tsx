import * as React from 'react'
import { Menu, MenuItem } from '@material-ui/core'

interface IDesktopMenuProps {
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
  anchorEl: null | HTMLElement
  menuId: string
  isMenuOpen: boolean
  handleMenuClose: () => void
}

export const DesktopMenu: React.FC<IDesktopMenuProps> = props => {
  const { anchorEl, menuId, isMenuOpen, handleMenuClose } = props
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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  )
}
