import React from 'react';
import {EyeOnIcon} from './EyeOnIcon';
import {EyeOffIcon} from './EyeOffIcon';

interface Props {
  name: IconName;
}

export function Icon({name}: Props) {
  const SVGIcon = iconRegistry[name];

  return <SVGIcon />;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
