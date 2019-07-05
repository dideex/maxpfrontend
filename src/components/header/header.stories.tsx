import * as React from 'react'
import { storiesOf } from '@storybook/react'
import HeaderAppBar from './app-bar'
// import { action } from '@storybook/addon-actions'

storiesOf('Header', module)
  .add('News header', () => <HeaderAppBar title="News" />, { info: { inline: true } })
  .add('Sign in header', () => <HeaderAppBar title="Sign in" />, { info: { inline: true } })
  .add('Profile header', () => <HeaderAppBar title="Profile" />, { info: { inline: true } })
