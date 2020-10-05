import React from 'react';

import {withTheme} from '../../../theme';
import {Svg} from '../../svg';
import {LegacySvgProps} from '../../types';

const defaultIcon: React.FC<LegacySvgProps> = ({
  title = 'Popout',
  ...props
}) => (
  <Svg title={title} {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </Svg>
);

export const Popout = withTheme<LegacySvgProps>(props => {
  const Icon = props.theme.icons.Popout || defaultIcon;
  return <Icon {...props} />;
});