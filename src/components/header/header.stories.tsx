import * as React from 'react'
import { storiesOf } from '@storybook/react'
import HeaderAppBar from './app-bar'
// import { action } from '@storybook/addon-actions'

storiesOf('Header', module).add('Basic view', () => <HeaderAppBar title="" />, { info: { inline: true } })
