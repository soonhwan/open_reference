import React, { Fragment } from 'react';
import { List } from 'components';

const DetailInfoEpisode = (props) => {
  return (
    <List mode="list" itemRenderer="episode" infoList={props.infoList} onEvent={props.onEvent} />
  )
}

export default DetailInfoEpisode;