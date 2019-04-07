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
interface IProfileTheme {
  avatar: string
}

interface IProfile {
  classes: IProfileTheme
}

const Profile: React.FC<IProfile> = ({ classes }) => {
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

export default withStyles(styles)(Profile)
