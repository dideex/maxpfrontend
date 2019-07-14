import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { HeaderAppBar, HeaderAppBarProps } from './app-bar'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'
import { THeaderTitles } from '../../routes'
import { isLoggedInProps } from '../../containers/is-logged-in'
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
    <HeaderAppBar
      title={select(label, options, defaultValue, groupId) as THeaderTitles}
      isAuth={boolean('Logged in', false, 'GROUP-ID1')}
    />
  ))
  .add('IPhone', () => <HeaderAppBar title="Sign in" isAuth={false} />, {
    viewport: { defaultViewport: 'iphonex' },
  })
