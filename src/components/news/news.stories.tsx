import * as React from 'react'
import { storiesOf } from '@storybook/react'
import News from './news'

storiesOf('News', module).add('News component', () => <News />, {
  info: { inline: true }
})
