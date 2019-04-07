import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Profile from './profile';

storiesOf('Profile', module).add(
  'Profile component',
  () => <Profile />,
  {
    info: { inline: true },
  }
);