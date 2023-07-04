/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
import IconSearch from './IconSearch';
import IconGitHub from './IconGitHub';
import IconTimeCircle from './IconTimeCircle';
import IconTop from './IconTop';
import IconEye from './IconEye';
import IconHeart from './IconHeart';
import IconPinglun from './IconPinglun';
import IconMoon from './IconMoon';
import IconSun from './IconSun';
import IconRight from './IconRight';
import IconLeft from './IconLeft';
import IconEmail from './IconEmail';
import IconWeibo from './IconWeibo';
import IconQq from './IconQq';
import IconLink from './IconLink';
import IconArrowRight from './IconArrowRight';
import IconClose from './IconClose';
import IconMenu from './IconMenu';
export { default as IconSearch } from './IconSearch';
export { default as IconGitHub } from './IconGitHub';
export { default as IconTimeCircle } from './IconTimeCircle';
export { default as IconTop } from './IconTop';
export { default as IconEye } from './IconEye';
export { default as IconHeart } from './IconHeart';
export { default as IconPinglun } from './IconPinglun';
export { default as IconMoon } from './IconMoon';
export { default as IconSun } from './IconSun';
export { default as IconRight } from './IconRight';
export { default as IconLeft } from './IconLeft';
export { default as IconEmail } from './IconEmail';
export { default as IconWeibo } from './IconWeibo';
export { default as IconQq } from './IconQq';
export { default as IconLink } from './IconLink';
export { default as IconArrowRight } from './IconArrowRight';
export { default as IconClose } from './IconClose';
export { default as IconMenu } from './IconMenu';

export type IconNames = 'search' | 'GitHub' | 'time-circle' | 'top' | 'eye' | 'heart' | 'pinglun' | 'moon' | 'sun' | 'right' | 'left' | 'email' | 'weibo' | 'qq' | 'link' | 'arrow-right' | 'close' | 'menu';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'search':
      return <IconSearch {...rest} />;
    case 'GitHub':
      return <IconGitHub {...rest} />;
    case 'time-circle':
      return <IconTimeCircle {...rest} />;
    case 'top':
      return <IconTop {...rest} />;
    case 'eye':
      return <IconEye {...rest} />;
    case 'heart':
      return <IconHeart {...rest} />;
    case 'pinglun':
      return <IconPinglun {...rest} />;
    case 'moon':
      return <IconMoon {...rest} />;
    case 'sun':
      return <IconSun {...rest} />;
    case 'right':
      return <IconRight {...rest} />;
    case 'left':
      return <IconLeft {...rest} />;
    case 'email':
      return <IconEmail {...rest} />;
    case 'weibo':
      return <IconWeibo {...rest} />;
    case 'qq':
      return <IconQq {...rest} />;
    case 'link':
      return <IconLink {...rest} />;
    case 'arrow-right':
      return <IconArrowRight {...rest} />;
    case 'close':
      return <IconClose {...rest} />;
    case 'menu':
      return <IconMenu {...rest} />;

  }

  return null;
};

export default IconFont;
