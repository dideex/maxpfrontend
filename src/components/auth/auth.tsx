import * as React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Theme, CircularProgress, makeStyles, Container } from '@material-ui/core'

import AuthHeader from './auth-header'
import { CustomInput } from '../common'
import { authContainer } from '../../containers'
import { authStoreProps } from '../../containers/auth'
import { IUserRequest } from '../../api'

const useStyles = makeStyles((theme: Theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    position: 'relative',
    margin: theme.spacing(3, 0, 2),
  },
  spinner: {
    position: 'absolute',
    right: theme.spacing(3),
  },
}))

export type IAuthProps = authStoreProps

export const SignIn: React.FC<IAuthProps> = ({ authUser, user }) => {
  const loading = user.loading === 'LOADING'
  const classes = useStyles()
  const { paper, avatar, form, submit } = classes
  const [state, setState] = React.useState<IUserRequest>({ username: '', password: '' })

  const getInputProps = (name: keyof IUserRequest) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setState({ ...state, [name]: event.target.value })
    return {
      value: state[name],
      handleChange,
      name,
    }
  }

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    authUser(state)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={paper}>
        <AuthHeader theme={avatar} title="Sign in" />
        <form className={form} onSubmit={handleSubmit}>
          <CustomInput {...getInputProps('username')} type="text" />
          <CustomInput {...getInputProps('password')} type="password" />
          <Button type="submit" fullWidth variant="contained" color="primary" className={submit}>
            Sign in
            {loading && <CircularProgress color="secondary" size={24} className={classes.spinner} />}
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default authContainer(SignIn)
