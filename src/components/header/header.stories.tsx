import * as React from 'react'
import { storiesOf } from '@storybook/react'
import HeaderAppBar from './app-bar'
import { withKnobs, select } from '@storybook/addon-knobs'
import { THeaderTitles } from '../../routes'
// import { action } from '@storybook/addon-actions'

const stories = storiesOf('Header menu', module)

const label = 'Title'
const options = {
  News: 'News',
  Signin: 'Sign in',
  Profile: 'Profile',
}
const defaultValue = 'News'
const groupId = 'GROUP-ID1'

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)

stories
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('Desktop basic', () => (
    <HeaderAppBar title={select(label, options, defaultValue, groupId) as THeaderTitles} />
  ))
  .add('IPhone', () => <HeaderAppBar title="Sign in" />, { viewport: { defaultViewport: 'iphonex' } })
