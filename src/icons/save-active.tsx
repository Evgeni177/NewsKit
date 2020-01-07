import React from 'react';
import {withTheme} from '../themes/emotion';
import {Svg, SvgLabels} from './svg';
import {IconSizeKeys, ColorKeys} from '../themes';

export interface SaveActiveIconProps extends SvgLabels {
  $size: IconSizeKeys;
  $color?: ColorKeys;
}

const defaultIcon: React.FC<SaveActiveIconProps> = ({
  $size,
  $color,
  title = 'Save active icon',
  ariaLabel,
}) => (
  <Svg viewBox="0 0 24 24" $size={$size} $color={$color} aria-label={ariaLabel}>
    <title>{title}</title>
    <polygon
      stroke="none"
      points="12 17.27 18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21"
    />
  </Svg>
);

export const SaveActive = withTheme<SaveActiveIconProps>(props => {
  const Icon = props.theme.icons.SaveActive || defaultIcon;
  return <Icon {...props} />;
});
