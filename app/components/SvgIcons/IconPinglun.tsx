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

const IconPinglun: FunctionComponent<Props> = ({ size = 16, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M256 448a1 1 0 1 0 128 0 1 1 0 1 0-128 0zM448 448a1 1 0 1 0 128 0 1 1 0 1 0-128 0zM640 448a1 1 0 1 0 128 0 1 1 0 1 0-128 0z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
      <path
        d="M512 128c211.2 0 448 153.6 448 352 0 96-57.6 185.6-160 243.2-57.6 32-64 102.4-64 153.6V896c-32-6.4-76.8-32-102.4-51.2-44.8-25.6-83.2-44.8-115.2-44.8-249.6 0-448-140.8-448-320C64 281.6 300.8 128 512 128m0-64C230.4 64 0 268.8 0 480s230.4 384 512 384c38.4 0 160 96 243.2 96H768c51.2-12.8 6.4-147.2 64-179.2 115.2-70.4 192-179.2 192-300.8 0-211.2-230.4-416-512-416z"
        fill={getIconColor(color, 1, 'currentColor')}
      />
    </svg>
  );
};

export default IconPinglun;
