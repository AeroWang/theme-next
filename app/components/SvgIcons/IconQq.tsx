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

const IconQq: FunctionComponent<Props> = ({ size = 16, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 0C229.333333 0 0 229.290667 0 512c0 282.624 229.333333 511.957333 512 511.957333s512-229.333333 512-512S795.136 0 512 0z"
        fill={getIconColor(color, 0, '#3CAAE3')}
      />
      <path
        d="M733.098667 633.045333s-15.914667 43.093333-44.629334 81.578667c0 0 51.797333 17.450667 47.189334 63.104 0 0 1.536 50.773333-110.293334 47.189333 0 0-78.976-6.186667-102.613333-39.509333h-20.992c-23.637333 33.322667-102.613333 39.509333-102.613333 39.509333-112.341333 3.584-110.293333-47.189333-110.293334-47.189333-4.096-45.653333 47.189333-63.146667 47.189334-63.146667a366.72 366.72 0 0 1-44.629334-81.536c-70.272 113.365333-63.104-15.914667-63.104-15.914666 13.354667-76.416 68.266667-126.208 68.266667-126.208-7.722667-69.248 20.992-81.536 20.992-81.536 6.144-214.442667 190.848-210.858667 194.432-210.858667 4.096 0 188.288-4.096 194.432 210.858667 0 0 28.714667 12.288 21.034667 81.536 0 0 55.381333 50.304 68.224 126.208 0.512 0.512 7.168 129.28-62.592 15.914666z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

export default IconQq;
