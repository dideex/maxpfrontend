import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

import NewsItem from './news-item'
import { INews } from '../../types'

const styles = {
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}
interface INewsTheme {
  avatar: string
}

interface INewsProps {
  classes: INewsTheme
  news: INews[]
}

const News: React.FC<INewsProps> = ({ classes, news }) => {
  const { avatar } = classes
  return (
    <div>
      {[1, 2, 3, 4].map(i => (
        <NewsItem key={i} />
      ))}
    </div>
  )
}

export default withStyles(styles)(News)
