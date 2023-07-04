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

const IconMenu: FunctionComponent<Props> = ({ size = 16, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M951.99999969 552.00000031L72.00000031 552.00000031c-22.00000031 0-40.00000031-18-40.00000031-40.00000031 0-22.00000031 18-40.00000031 40.00000031-40.00000031l880.00000031 0c22.00000031 0 40.00000031 18 40.00000032 40.00000031C992 534.00000031 974 552.00000031 951.99999969 552.00000031zM951.99999969 231.99999969L72.00000031 231.99999969c-22.00000031 0-40.00000031-18-40.00000031-40.00000031s18-40.00000031 40.00000031-40.00000032l880.00000031 0c22.00000031 0 40.00000031 18 40.00000032 40.00000032S974 231.99999969 951.99999969 231.99999969zM72.00000031 792.00000031l880.00000031 0c22.00000031 0 40.00000031 18 40.00000032 40.00000031 0 22.00000031-18 40.00000031-40.00000032 40.00000032L72.00000031 872c-22.00000031 0-40.00000031-18-40.00000031-40.00000031C32 810.00000031 50 792.00000031 72.00000031 792.00000031z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </svg>
  );
};

export default IconMenu;
