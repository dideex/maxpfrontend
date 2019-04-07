import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const styles = {
  avatar: {
    margin: 10,
    width: 60,
    height: 60
  }
}
interface INewsTheme {
  avatar: string
}

interface INews {
  classes: INewsTheme
}

const News: React.FC<INews> = ({ classes }) => {
  const { avatar } = classes
  return (
    <>
      <Avatar
        alt="Remy Sharp"
        src="https://material-ui.com/static/images/avatar/1.jpg"
        className={avatar}
      />
    </>
  )
}

export default withStyles(styles)(News)
