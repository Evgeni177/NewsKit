import React from 'react';
import {withTheme} from '../../../theme';
import {Svg} from '../../svg';
import {LegacyColoredSvgProps} from '../../types';

const defaultIcon: React.FC<LegacyColoredSvgProps> = ({
  size,
  title = 'Twitter logo',
}) => (
  <Svg viewBox="0 0 400 400" size={size} title={title}>
    <g>
      <circle fill="#1DA1F2" cx="200" cy="200" r="200" />
    </g>
    <g>
      <path
        fill="#FFFFFF"
        d="M163.4,305.5c88.7,0,137.2-73.5,137.2-137.2c0-2.1,0-4.2-0.1-6.2c9.4-6.8,17.6-15.3,24.1-25
		c-8.6,3.8-17.9,6.4-27.7,7.6c10-6,17.6-15.4,21.2-26.7c-9.3,5.5-19.6,9.5-30.6,11.7c-8.8-9.4-21.3-15.2-35.2-15.2
		c-26.6,0-48.2,21.6-48.2,48.2c0,3.8,0.4,7.5,1.3,11c-40.1-2-75.6-21.2-99.4-50.4c-4.1,7.1-6.5,15.4-6.5,24.2
		c0,16.7,8.5,31.5,21.5,40.1c-7.9-0.2-15.3-2.4-21.8-6c0,0.2,0,0.4,0,0.6c0,23.4,16.6,42.8,38.7,47.3c-4,1.1-8.3,1.7-12.7,1.7
		c-3.1,0-6.1-0.3-9.1-0.9c6.1,19.2,23.9,33.1,45,33.5c-16.5,12.9-37.3,20.6-59.9,20.6c-3.9,0-7.7-0.2-11.5-0.7
		C110.8,297.5,136.2,305.5,163.4,305.5"
      />
    </g>
  </Svg>
);

export const Twitter = withTheme<LegacyColoredSvgProps>(props => {
  const Icon = props.theme.icons.Twitter || defaultIcon;
  return <Icon {...props} />;
});