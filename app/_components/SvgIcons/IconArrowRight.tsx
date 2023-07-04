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

const IconArrowRight: FunctionComponent<Props> = ({ size = 16, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M415.616 823.552l243.242667-283.776a42.666667 42.666667 0 0 0 0-55.552L415.616 200.448a36.266667 36.266667 0 0 0-57.770667 43.733333l162.773334 244.138667a42.666667 42.666667 0 0 1 0 47.36l-162.773334 244.138667a36.266667 36.266667 0 0 0 57.770667 43.733333z"
        fill={getIconColor(color, 0, '#8240FF')}
      />
    </svg>
  );
};

export default IconArrowRight;
