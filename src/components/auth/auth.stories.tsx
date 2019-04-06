import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Auth from './auth';

storiesOf('Auth', module).add(
  'Auth component',
  () => <Auth />,
  {
    info: { inline: true },
  }
);