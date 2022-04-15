import React, { memo, FC, useMemo } from 'react';
import { ThumbnailWrap } from './ThumbnailStyles';
import utils from 'utils';

interface IProps {
  mode: string;
  src: string;
  alt: string,
  className: string;
  style: any;
}

const Thumbnail: FC<IProps> = ({ mode, src, alt, className, style }) => {
  const param = {
    className: useMemo(() => {
      return utils.classNameBind([
        'thumbnail',
        mode ? 'thumb-' + mode : '',
        className ? className : '',
      ])
    }, [className, mode]),
  }

  const paramImg = {
    src: src,
    alt: alt,
    style: style,
    className: 'img',
    onError: (e: any) => {
      e.target.src = '/images/onerror_img_product.png';
    },
  }

  return (
    <ThumbnailWrap {...param}>
      <img {...paramImg} />
    </ThumbnailWrap>
  );
}

export default memo(Thumbnail);