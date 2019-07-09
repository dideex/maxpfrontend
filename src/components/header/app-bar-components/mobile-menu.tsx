import * as React from 'react'
import { Menu, MenuItem, IconButton, Badge } from '@material-ui/core'
import { Mail as MailIcon, AccountCircle, Notifications } from '@material-ui/icons'

interface IMobileProps {
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
  mobileMoreAnchorEl: null | HTMLElement
  mobileMenuId: string
  isMobileMenuOpen: boolean
  handleMobileMenuClose: () => void
}

export const MobileMenu: React.FC<IMobileProps> = props => {
  const {
    handleProfileMenuOpen,
    mobileMoreAnchorEl,
    mobileMenuId,
    isMobileMenuOpen,
    handleMobileMenuClose,
  } = props
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="Show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="Show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="Account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )
}
