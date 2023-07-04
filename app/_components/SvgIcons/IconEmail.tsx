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

const IconEmail: FunctionComponent<Props> = ({ size = 16, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 1024c281.6 0 512-230.4 512-512s-230.4-512-512-512-512 230.4-512 512 230.4 512 512 512z"
        fill={getIconColor(color, 0, '#F48D2C')}
      />
      <path
        d="M512 537.6l256-243.2H268.8h-6.4L512 537.6z m294.4-204.8v-6.4L633.6 492.8l172.8 204.8V332.8z m-588.8 0v352l179.2-192-172.8-166.4c-6.4 0-6.4 0-6.4 6.4z m300.8 256c-6.4 6.4-12.8 6.4-12.8 0l-70.4-64L256 729.6h524.8l-192-204.8-70.4 64z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

export default IconEmail;
