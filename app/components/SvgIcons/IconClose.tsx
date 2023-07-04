/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconClose: FunctionComponent<Props> = ({ size = 16, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M566.4 512l318.4-318.4c16-16 16-38.4 0-54.4s-38.4-16-54.4 0L512 457.6 192 140.8c-14.4-16-38.4-16-52.8 0s-16 38.4 0 54.4L457.6 512 139.2 830.4c-16 16-16 38.4 0 54.4 8 6.4 16 11.2 27.2 11.2s19.2-3.2 27.2-11.2l320-318.4 320 316.8c8 6.4 19.2 11.2 27.2 11.2s19.2-3.2 27.2-11.2c16-16 16-38.4 0-54.4L566.4 512z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </svg>
  );
};

export default IconClose;
