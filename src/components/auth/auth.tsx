import * as React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import { Theme, createStyles } from '@material-ui/core'

import AuthHeader from "./auth-header";
import { CustomInput } from '../common'

const styles = (theme: Theme) =>
  createStyles({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
        .spacing.unit * 3}px`
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit
    },
    submit: {
      marginTop: theme.spacing.unit * 3
    }
  })

interface ISignInTheme {
  main: string
  paper: string
  avatar: string
  form: string
  submit: string
}

interface ISignIn {
  classes: ISignInTheme
}

interface IForm {
  [key: string]: string
}

const SignIn: React.FC<ISignIn> = ({ classes }) => {
  const { main, paper, avatar, form, submit } = classes

  const [state, setState] = React.useState<IForm>({})

  const getInputProps = (name: string) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setState({ ...state, [name]: event.target.value })
    return {
      value: state[name],
      handleChange,
      name
    }
  }


const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
  e.preventDefault()
  console.log(" LOG ___ state ", state )
}

  return (
    <main className={main}>
      <CssBaseline />
      <Paper className={paper}>
        <AuthHeader theme={avatar} title="Sign in"  />
        <form className={form} onSubmit={handleSubmit}>
          <CustomInput {...getInputProps('username')} type="text" />
          <CustomInput {...getInputProps('password')} type="password" />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={submit}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  )
}

export default withStyles(styles)(SignIn)
