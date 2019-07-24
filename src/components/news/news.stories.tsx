import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { IUser } from '../../store/user/types'
import { INews } from '../../types'
import News from './news'
import NewsItem from './news-item'

const ryan: IUser = {
  userName: 'Ryan Dhal',
  avatar: 'No-image.jpg',
  age: 23,
  email: 'ryan@gmail.com',
  gender: 'man',
}
const joe: IUser = {
  userName: 'Joe Kewl',
  avatar: 'No-image.jpg',
  age: 13,
  email: 'joe@mail.com',
  gender: 'man',
}

const news: INews[] = [
  {
    title: 'Awesome title #1',
    body:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    author: ryan,
    date: Date.now(),
  },
  {
    title: 'Awesome title #2',
    body:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    author: joe,
    date: Date.now(),
  },
]
storiesOf('News', module)
  .add('All news', () => <News news={news} />)
  .add('News item', () => <NewsItem {...news[0]} />)
