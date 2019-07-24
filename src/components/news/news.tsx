import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'

import NewsItem from './news-item'
import { INews } from '../../types'

const styles = {
  avatar: {},
}
interface INewsTheme {
  avatar: string
}

interface INewsProps {
  classes: INewsTheme
  news: INews[]
}

const News: React.FC<INewsProps> = ({ classes, news }) => {
  // const { avatar } = classes
  return (
    <div>
      {news.map((newsProps, i) => (
        <NewsItem key={i} {...newsProps} />
      ))}
    </div>
  )
}

export default withStyles(styles)(News)
