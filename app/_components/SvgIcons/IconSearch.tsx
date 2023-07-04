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

const IconSearch: FunctionComponent<Props> = ({ size = 16, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M894.3872 819.013632 655.1552 576.60928c52.4288-55.12704 72.761344-122.871808 72.761344-205.053952 0-169.146368-130.610176-305.958912-298.596352-305.958912-167.962624 0-304.633856 137.617408-304.633856 306.763776 0 169.147392 134.541312 299.305984 302.50496 299.305984 70.132736 0 136.737792-16.780288 188.269568-57.020416l240.959488 244.130816c4.405248 4.451328 10.180608 6.677504 15.954944 6.677504 5.776384 0 15.337472-6.816768 19.739648-11.266048C900.921344 845.33248 903.1936 827.913216 894.3872 819.013632zM172.831744 368.572416c0-140.362752 113.378304-254.498816 252.724224-254.498816 139.368448 0 252.7488 114.136064 252.7488 254.498816 0 140.316672-113.381376 254.49984-252.7488 254.49984C286.210048 623.072256 172.831744 508.889088 172.831744 368.572416z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </svg>
  );
};

export default IconSearch;
