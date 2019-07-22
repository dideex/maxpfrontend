import * as React from 'react'
import { storiesOf } from '@storybook/react'
import News from './news'
import { IUser } from '../../store/user/types'
import { INews } from '../../types'

const author: IUser = {
  userName: 'Ryan Dhal',
  avatar: 'No-image.jpg',
  age: 23,
  email: 'ryan@gmail.com',
  gender: 'man',
}

const news: INews[] = [
  {
    title: 'News title',
    body: 'News body',
    author,
    date: Date.now(),
  },
]
storiesOf('News', module).add('News component', () => <News news={news} />)
