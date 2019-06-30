import * as React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions';
import { AuthStyled } from './auth'
import { authStoreProps } from '../../containers/auth'

const authStore: authStoreProps = {
  user: {
    loading: 'IDLE',
    userName: '',
    avatar: '',
    age: 0,
    email: '',
    gender: 'man',
  },
  authUser: () => {},
}

storiesOf('Auth', module).add('Auth component', () => <AuthStyled {...authStore} />, {
  info: { inline: true },
})
