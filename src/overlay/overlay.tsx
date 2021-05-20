import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {useLockBodyScroll} from '../utils/hooks';
import {
  styled,
  getStylePreset,
  MQ,
  getMotionCssFromTheme,
} from '../utils/style';

interface OverlayProps {
  open: boolean;
  onClick?: () => void;
  overrides?: {
    stylePreset?: MQ<string>;
  };
}

const StyledOverlay = styled.div<Pick<OverlayProps, 'overrides'>>`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 70;
  cursor: pointer;
  ${getStylePreset('overlay', '')}

  &.nk-overlay-enter {
    opacity: 0;
  }
  &.nk-overlay-enter-active {
    opacity: 1;

    transition-property: opacity;
    ${getMotionCssFromTheme('transitionDuration', 'motionDuration010')}
  }
  &.nk-overlay-exit {
    opacity: 1;
  }
  &.nk-overlay-exit-active {
    opacity: 0;

    transition-property: opacity;
    ${getMotionCssFromTheme('transitionDuration', 'motionDuration010')}
  }
`;

const BaseOverlay: React.FC<Omit<OverlayProps, 'open'>> = props => {
  useLockBodyScroll();

  return <StyledOverlay data-testid="overlay" {...props} />;
};

export const Overlay: React.FC<OverlayProps> = ({open, ...props}) => (
  <CSSTransition
    in={open}
    timeout={1000}
    classNames="nk-overlay"
    mountOnEnter
    unmountOnExit
  >
    <BaseOverlay {...props} />
  </CSSTransition>
);
