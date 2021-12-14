import React from 'react';
import { storiesOf } from '@storybook/react'
import StoryWrapperComponent from '../../hocs/StoryWrapperComponent.js'

import Card from './Card.js'
import KeywordBox from './KeywordBox.js'
import RankingBox from './RankingBox.js'
import BannerBox from './BannerBox.js'
import BannerSwiper from './BannerSwiper.js'
import OneadayBox from './OneadayBox.js'
import MDPickBox from './MDPickBox.js'

storiesOf('Components|Common/offering', module)
  .addDecorator(StoryWrapperComponent)
  .add('1. Card', () => (<Card />))
  .add('2. RankingBox', () => (<RankingBox />))
  .add('3. BannerSwiper', () => (<BannerSwiper />))
  .add('4. BannerBox', () => (<BannerBox />))
  .add('5. KeywordBox', () => (<KeywordBox />))
  .add('6. OneadayBox', () => (<OneadayBox />))
  .add('7. MDPickBox', () => (<MDPickBox />))