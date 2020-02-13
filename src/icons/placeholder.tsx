import React from 'react';
import {withTheme} from '../themes/emotion';
import {Svg, SvgLabels} from './svg';
import {IconSizeKeys, ColorKeys} from '../themes';
import {ThemeProp} from '../utils/style';

export interface PlaceholderIconProps extends SvgLabels {
  $size: IconSizeKeys;
  $color?: ColorKeys;
}

const defaultIcon: React.FC<PlaceholderIconProps & ThemeProp> = ({
  $size,
  $color,
  title = 'Placeholder',
  ariaLabel,
}) => (
  <Svg viewBox="0 0 88 88" $size={$size} $color={$color} aria-label={ariaLabel}>
    <title>{title}</title>
    <path d="M 88 40 L 88 80 L 0 80 L 0 40 L 88 40 L 88 40 Z  M 47 48 L 43 48 L 43 72 L 47 72 L 47 48 L 47 48 Z  M 13 48 L 9 48 L 9 72 L 13 72 L 13 66 L 17 62 L 27 72 L 33 72 L 20 59 L 31 48 L 25 48 L 13 60 L 13 48 L 13 48 Z  M 79 48 L 59 48 L 59 52 L 67 52 L 67 72 L 71 72 L 71 52 L 79 52 L 79 48 L 79 48 Z M 78.402 19.096 C 78.668 19.136 78.935 19.234 79.179 19.355 C 79.77 19.644 80.06 20.151 79.99 20.702 C 79.902 21.371 79.378 21.978 78.751 22.04 C 78.377 22.076 77.994 21.987 77.614 21.959 C 76.942 21.91 76.267 21.791 75.602 21.832 C 74.663 21.891 74.199 22.465 74.325 23.431 C 74.399 23.995 74.575 24.612 74.894 25.058 C 75.747 26.26 76.691 27.394 77.621 28.534 C 78.318 29.387 78.49 30.103 78.116 30.855 C 77.676 31.741 76.923 32.098 75.87 31.977 C 73.709 31.724 71.547 31.48 69.383 31.259 C 67.983 31.115 67.619 30.373 68.414 29.167 C 68.594 28.893 68.849 28.659 69.099 28.446 C 69.419 28.173 69.712 28.172 70.133 28.39 C 70.741 28.704 71.432 28.894 72.108 29.003 C 72.952 29.143 73.818 29.151 74.673 29.206 C 74.812 29.215 74.953 29.17 75.21 29.137 C 74.588 28.338 73.999 27.661 73.502 26.92 C 72.951 26.103 72.366 25.274 72.008 24.362 C 71.319 22.61 71.971 20.861 73.571 19.951 C 75.075 19.097 76.704 18.837 78.402 19.096 Z  M 38.897 18.002 C 39.863 18.023 40.726 18.329 41.188 19.285 C 41.663 20.267 41.375 21.185 40.784 22.015 C 39.919 23.23 38.744 24.081 37.506 24.806 C 36.152 25.597 34.736 26.275 33.287 27.035 C 33.415 28.221 34.284 29.143 35.612 29.436 C 37.116 29.768 38.562 29.489 39.96 28.91 C 42.021 28.058 43.901 26.872 45.573 25.358 C 46.072 24.906 46.64 24.447 46.618 23.62 C 46.615 23.524 46.801 23.385 46.925 23.333 C 48.235 22.792 49.452 23.586 49.568 25.042 C 49.624 25.748 49.678 26.453 49.745 27.157 C 49.76 27.315 49.812 27.474 49.865 27.624 C 50.177 28.51 50.633 28.678 51.209 27.983 C 52.257 26.715 53.246 25.39 54.189 24.033 C 54.67 23.339 54.972 23.068 55.645 23.202 C 56.25 23.322 56.623 23.779 56.689 24.558 C 56.772 25.547 56.777 26.544 56.9 27.524 C 56.954 27.93 57.228 28.305 57.399 28.693 C 57.756 28.478 58.192 28.336 58.454 28.032 C 59.347 26.989 60.184 25.894 61.03 24.811 C 62.132 23.4 62.533 23.276 64.195 23.806 C 65.596 24.255 66.947 24.103 68.284 23.469 C 68.704 23.272 69.223 23.207 69.688 23.233 C 70.383 23.276 70.877 23.803 70.982 24.439 C 71.08 25.025 70.769 25.641 70.111 25.936 C 68.391 26.704 66.595 27.087 64.758 26.542 C 63.89 26.285 63.294 26.483 62.743 27.143 C 62.027 27.998 61.351 28.896 60.568 29.682 C 59.846 30.405 59.061 31.099 58.204 31.633 C 57.101 32.317 56.007 32.026 55.295 30.915 C 54.839 30.206 54.554 29.38 54.2 28.624 C 53.67 29.219 53.133 29.911 52.506 30.504 C 52.008 30.974 51.441 31.405 50.836 31.704 C 49.674 32.278 48.778 32.004 48.163 30.829 C 47.742 30.023 47.517 29.105 47.209 28.235 C 47.156 28.087 47.126 27.933 47.075 27.745 C 46.108 28.35 45.195 28.959 44.246 29.505 C 42.224 30.667 40.129 31.643 37.802 31.919 C 36.454 32.081 35.114 32.01 33.814 31.572 C 32.062 30.982 30.916 29.804 30.553 27.881 C 30.531 27.762 30.49 27.648 30.456 27.534 C 29.89 27.484 29.313 27.51 28.781 27.363 C 28.313 27.231 27.827 26.982 27.468 26.645 C 26.764 25.985 26.881 24.793 27.638 24.191 C 27.914 23.97 28.132 23.989 28.506 24.127 C 29.156 24.365 29.896 24.351 30.602 24.38 C 30.712 24.384 30.868 24.073 30.946 23.881 C 31.828 21.702 33.133 19.915 35.224 18.854 C 36.381 18.266 37.608 17.973 38.897 18.002 Z  M 33.875 8 C 35.123 8.639 35.317 9.319 34.535 10.516 C 34.192 11.04 33.79 11.53 33.376 12.004 C 30.968 14.755 29.131 17.885 27.446 21.093 C 25.844 24.146 24.402 27.281 22.916 30.395 C 22.329 31.626 20.985 31.969 19.946 31.055 C 19.742 30.874 19.574 30.528 19.576 30.26 C 19.596 28.475 18.924 26.825 18.63 25.107 C 18.235 22.785 18.004 20.435 17.708 18.154 C 17.721 18.137 17.625 18.234 17.566 18.351 C 15.818 21.718 14.065 25.083 12.337 28.462 C 11.976 29.169 11.683 29.906 11.739 30.753 C 11.756 31.009 11.487 31.386 11.242 31.533 C 10.851 31.77 10.376 31.978 9.928 31.996 C 8.105 32.064 7.526 31.196 8.4 29.615 C 9.811 27.062 11.346 24.577 12.759 22.025 C 13.866 20.023 14.911 17.985 15.893 15.921 C 16.279 15.109 16.452 14.191 16.661 13.309 C 16.741 12.979 16.832 12.771 17.186 12.78 C 17.682 12.795 18.185 12.77 18.669 12.858 C 19.572 13.021 20.028 13.543 20.094 14.47 C 20.223 16.312 20.343 18.157 20.431 20.003 C 20.541 22.303 21.037 24.525 21.752 26.841 C 21.882 26.613 21.97 26.485 22.034 26.344 C 24.55 20.861 27.446 15.581 30.647 10.463 C 31.253 9.495 31.878 8.536 32.955 8 L 33.875 8 L 33.875 8 Z  M 37.226 21.05 C 36.447 21.515 35.67 22.009 34.958 22.595 C 34.572 22.912 34.315 23.436 34 23.866 C 34.033 23.909 34.068 23.955 34.101 24 C 34.437 23.852 34.789 23.743 35.103 23.551 C 35.959 23.027 36.814 22.496 37.633 21.901 C 37.829 21.761 37.882 21.359 38 21.077 C 37.739 21.061 37.426 20.93 37.226 21.05 Z" />
  </Svg>
);

export const Placeholder = withTheme<PlaceholderIconProps>(props => {
  const Icon = props.theme.icons.Placeholder || defaultIcon;
  return <Icon {...props} />;
});
