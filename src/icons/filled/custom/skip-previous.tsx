import React from 'react';

import {withTheme} from '../../../theme';
import {Svg} from '../../svg';
import {LegacySvgProps} from '../../types';

const defaultIcon: React.FC<LegacySvgProps> = ({
  title = 'SkipPrevious icon',
  ...props
}) => (
  <Svg {...props} title={title}>
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </Svg>
);

export const SkipPrevious = withTheme<LegacySvgProps>(props => {
  const Icon = props.theme.icons.SkipPrevious || defaultIcon;

  return <Icon {...props} />;
});