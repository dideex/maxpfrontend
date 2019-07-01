import * as React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions';
import { AuthStyled } from './auth'
import { authStoreProps } from '../../containers/auth'
import { action } from '@storybook/addon-actions'

const authUser = action('Handle submit')

const authStore: authStoreProps = {
  user: {
    loading: 'IDLE',
    userName: '',
    avatar: '',
    age: 0,
    email: '',
    gender: 'man',
  },
  authUser,
}

storiesOf('Auth', module)
  .add('Basic view', () => <AuthStyled {...authStore} />, { info: { inline: true } })
  .add(
    'Loading',
    () => <AuthStyled user={{ ...authStore.user, loading: 'LOADING' }} authUser={authStore.authUser} />,
    {
      info: { inline: true },
    },
  )
