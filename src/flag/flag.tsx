/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from 'react';
import {styled} from '../utils/style';
import {FlagProps} from './types';
import {FlagSize} from './utils';
import {SizingKeys} from '../themes';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {PaddingPresetKeys} from '../themes/mappers/spacing';
import {BaseFlag} from '../baseFlag';

const flagSizeToToken: Record<FlagSize, SizingKeys> = {
  [FlagSize.Large]: 'sizing060',
  [FlagSize.Small]: 'sizing050',
};

const flagPaddingToken: Record<FlagSize, PaddingPresetKeys> = {
  [FlagSize.Large]: 'spaceInset020Squish',
  [FlagSize.Small]: 'spaceInset010Squish',
};

const flagBorderRadiusToken: Record<FlagSize, SizingKeys> = {
  [FlagSize.Large]: 'sizing070',
  [FlagSize.Small]: 'sizing050',
};

const StyledFlag = styled(BaseFlag)<FlagProps>`
  ${({theme, $size: sizeProp, $spacing: spacingProp}) => {
    const size = sizeProp || FlagSize.Small;
    const sizeToken = flagSizeToToken[size];
    const paddingToken = flagPaddingToken[size];
    const borderWidth = theme.borders.borderWidth020;
    const height = theme.sizing[sizeToken];

    return {
      minHeight: theme.sizing[sizeToken],
      padding: spacingProp || theme.sizing[paddingToken],
      lineHeight: `calc(${height} - ${borderWidth} * 2)`,
    };
  }};

  ${({$size: sizeProp, ...props}) => {
    const size = sizeProp || FlagSize.Small;
    return getStylePresetFromTheme('flag010', '$stylePreset' as any, {
      borderRadiusSize: flagBorderRadiusToken[size],
    })(props);
  }}
`;

export const Flag: React.FC<FlagProps> = props => {
  const {children} = props;
  return (
    <StyledFlag data-testid="flag" {...props}>
      {children}
    </StyledFlag>
  );
};