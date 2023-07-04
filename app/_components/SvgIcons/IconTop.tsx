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

const IconTop: FunctionComponent<Props> = ({ size = 16, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M542.72 245.248v615.424c0 8.192-2.900992 15.188992-8.704 20.992s-13.140992 8.704-22.016 8.704-16.212992-2.900992-22.016-8.704-8.704-12.8-8.704-20.992v-615.424l-225.28 239.616c-5.460992 6.144-12.628992 9.216-21.504 9.216s-16.212992-3.243008-22.016-9.728-8.704-14.164992-8.704-23.04 3.072-16.724992 9.216-23.552l277.504-294.912c5.460992-6.144 12.628992-9.216 21.504-9.216s16.043008 3.072 21.504 9.216l277.504 294.912c6.144 6.827008 9.216 14.676992 9.216 23.552s-2.900992 16.555008-8.704 23.04c-5.803008 6.484992-12.971008 9.728-21.504 9.728s-15.872-3.072-22.016-9.216l-225.28-239.616z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </svg>
  );
};

export default IconTop;
