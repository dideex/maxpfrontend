import * as React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

// import { Button, Welcome } from '@storybook/react/demo'
// import { Auth } from '../components/auth'
import App from "../App"
/* 
storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
)) 
 */

// storiesOf('Auth', module).add('Markup', () => <Auth />)
storiesOf('App', module).add('Markup', () => <App />)
/* 
storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
 */