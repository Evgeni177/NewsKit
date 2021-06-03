import {BannerProps} from './types';
import {
  styled,
  getStylePreset,
  getResponsiveSize,
  getResponsiveSpace,
  getTypographyPreset,
} from '../utils/style';
import {Stack} from '../stack';
import {TextBlock} from '../text-block';

export const StyledBannerContainer = styled.div<BannerProps>`
  box-sizing: border-box;
  ${({layout}) => getStylePreset(`banner.${layout}`, '')};
  ${({layout}) =>
    getResponsiveSpace('padding', `banner.${layout}`, '', 'spaceInset')}
  ${({layout}) =>
    getResponsiveSize('minHeight', `banner.${layout}`, '', 'minHeight')}
`;

export const StyledMaxWidthContainer = styled(Stack)<
  Pick<BannerProps, 'overrides' | 'layout'>
>`
  box-sizing: border-box;
  ${({layout}) =>
    getResponsiveSize('maxWidth', `banner.${layout}`, '', 'maxWidth')}
  margin: 0 auto;
`;

export const StyledIconContentContainer = styled(Stack)<
  Pick<BannerProps, 'overrides' | 'layout'>
>`
  flex: 1;
  ${({layout}) => layout === 'vertical' && 'align-self: stretch;'}
  ${({layout}) =>
    getResponsiveSpace(
      layout === 'vertical' ? 'marginBottom' : 'marginRight',
      `banner.${layout}.content`,
      'content',
      'spaceInline',
    )}
`;

export const StyledIconContainer = styled.div<
  Pick<BannerProps, 'overrides' | 'layout'>
>`
  display: flex;
  ${({layout}) =>
    getResponsiveSpace(
      'marginRight',
      `banner.${layout}.icon`,
      'icon',
      'spaceInline',
    )}
`;

export const StyledContentContainer = styled.div`
  flex: 1;
  align-self: center;
`;

export const StyledMessageContainer = styled(TextBlock)<
  Pick<BannerProps, 'overrides' | 'layout'>
>`
  ${({layout}) =>
    getTypographyPreset(`banner.${layout}.content.message`, 'content.message', {
      withCrop: true,
    })};

  ${({layout}) =>
    getStylePreset(`banner.${layout}.content.message`, 'content.message')};
`;

export const StyledActionsContainer = styled(Stack)<
  Pick<BannerProps, 'overrides' | 'layout'>
>`
  ${({layout}) =>
    layout === 'vertical' ? 'align-self: stretch;' : 'align-self: center;'}
`;
