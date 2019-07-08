/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import CoreLink from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'

export interface ILinkProps {
  to: string
  children: React.ReactElement
}

export const Link: React.FC<ILinkProps> = ({ children, to }) => {
  return (
    <CoreLink color="textPrimary" underline="none" component={RouterLink} to={to}>
      {children}
    </CoreLink>
  )
}
