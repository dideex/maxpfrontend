import * as React from 'react'
import { INews } from '../../types'

const NewsItem: React.FC<INews> = ({ author, body, title, date }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>
        <a href="#">{author.userName}</a>
      </p>
    </div>
  )
}

export default NewsItem
