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
  .addParameters({ viewport: { defaultViewport: 'iphone6' } })
  .add('Knobs header', () => (
    <HeaderAppBar title={select(label, options, defaultValue, groupId) as THeaderTitles} />
  ))
  .add('News header', () => <HeaderAppBar title="News" />, { info: { inline: true } })
  .add('Sign in header', () => <HeaderAppBar title="Sign in" />, { info: { inline: true } })
  .add('IPhone', () => <HeaderAppBar title="Sign in" />, { viewport: { defaultViewport: 'iphonex' } })
