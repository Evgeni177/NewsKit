import React from 'react';
import {Svg} from '../../svg';
import {customToNewsKitIcon} from '../../custom-to-newskit-icon';

export const IconOutlinedForward30 = customToNewsKitIcon(
  'IconOutlinedForward30',
  props => (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.63899 7.13242H6.63003V8.61644H7.68383C7.93047 8.61644 8.13226 8.6621 8.33405 8.70776C8.53584 8.75343 8.69279 8.84475 8.82732 8.9589C8.96185 9.07306 9.07396 9.23288 9.14122 9.41553C9.20849 9.59817 9.25333 9.82648 9.25333 10.0776C9.25333 10.2831 9.23091 10.4658 9.16364 10.6256C9.09638 10.7854 8.98427 10.9224 8.87216 11.0365C8.76006 11.1507 8.60311 11.242 8.42374 11.3105C8.24437 11.379 8.04257 11.4018 7.81836 11.4018C7.61657 11.4018 7.4372 11.3562 7.25783 11.3105C7.07846 11.2648 6.94393 11.1735 6.8094 11.0594C6.67487 10.9452 6.58519 10.8311 6.51792 10.6712C6.45066 10.5114 6.40582 10.3516 6.40582 10.169H4.5C4.5 10.6484 4.58969 11.0822 4.76906 11.4247C4.94843 11.7671 5.21748 12.0411 5.50896 12.2922C5.80044 12.5434 6.15918 12.7032 6.54034 12.8174C6.92151 12.9315 7.32509 12.9772 7.72868 12.9772C8.22195 12.9772 8.64795 12.9087 9.07396 12.7945C9.49996 12.6804 9.83628 12.4749 10.1502 12.2466C10.4641 12.0183 10.6883 11.6986 10.8677 11.3562C11.047 11.0137 11.1367 10.6027 11.1367 10.1461C11.1367 9.62101 11.0022 9.16438 10.7331 8.75343C10.4641 8.34247 10.0605 8.06849 9.52238 7.86301C9.76902 7.74886 9.97081 7.6347 10.1502 7.47489C10.3296 7.31507 10.4641 7.15525 10.5986 6.9726C10.7331 6.78995 10.8228 6.60731 10.8901 6.40183C10.9574 6.19635 10.9798 5.99087 10.9798 5.78539C10.9798 5.32877 10.8901 4.91781 10.7331 4.57534C10.5762 4.23288 10.352 3.93607 10.0605 3.70776C9.76902 3.47945 9.4327 3.2968 9.02911 3.18265C8.62553 3.06849 8.1771 3 7.70625 3C7.28025 3 6.87666 3.06849 6.4955 3.18265C6.11434 3.2968 5.80044 3.47945 5.50896 3.70776C5.21748 3.93607 4.99327 4.23288 4.83632 4.55251C4.67937 4.87215 4.58969 5.23744 4.58969 5.6484H6.4955C6.4955 5.48858 6.54034 5.32877 6.60761 5.19178C6.67487 5.05479 6.76456 4.96347 6.87666 4.84932C6.98877 4.73516 7.1233 4.66667 7.28025 4.621C7.4372 4.57534 7.59415 4.55251 7.77352 4.55251C7.97531 4.55251 8.1771 4.59817 8.33405 4.64384C8.491 4.6895 8.62553 4.78082 8.73764 4.89498C8.84974 5.00913 8.91701 5.12329 8.98427 5.28311C9.05154 5.44292 9.07396 5.60274 9.07396 5.78539C9.07396 6.19635 8.96185 6.51598 8.71522 6.76712C8.46858 7.01826 8.10984 7.13242 7.63899 7.13242ZM19.2758 10.7169C19.4327 10.2146 19.5 9.57534 19.5 8.84475V7.15525C19.5 6.42466 19.4103 5.80822 19.2534 5.28311C19.0964 4.75799 18.8722 4.3242 18.5807 3.98174C18.2892 3.63927 17.9529 3.38813 17.5493 3.22831C17.1457 3.06849 16.7197 3 16.2265 3C15.7332 3 15.2848 3.06849 14.9036 3.22831C14.5224 3.38813 14.1637 3.63927 13.8947 3.98174C13.6256 4.3242 13.4014 4.78082 13.2444 5.28311C13.0875 5.78539 13.0202 6.42466 13.0202 7.15525V8.84475C13.0202 9.57534 13.1099 10.1918 13.2669 10.7169C13.4238 11.242 13.648 11.6758 13.9395 12.0183C14.231 12.3607 14.5673 12.6119 14.9709 12.7717C15.3745 12.9315 15.8005 13 16.2937 13C16.787 13 17.2354 12.9315 17.6166 12.7717C17.9978 12.6119 18.3565 12.3607 18.6256 12.0183C18.8946 11.6758 19.1188 11.2192 19.2758 10.7169ZM17.5941 6.88113C17.5941 6.44734 17.5717 6.08204 17.5044 5.78524C17.4371 5.48844 17.3475 5.26013 17.2354 5.07748C17.1232 4.89483 16.9887 4.75784 16.8093 4.68935C16.63 4.62086 16.4506 4.5752 16.2488 4.5752C16.047 4.5752 15.8452 4.62086 15.6883 4.68935C15.5313 4.75784 15.3744 4.89483 15.2623 5.07748C15.1502 5.26013 15.0605 5.48844 14.9932 5.78524C14.926 6.08204 14.9035 6.44734 14.9035 6.88113V9.09574C14.9035 9.52953 14.926 9.89483 14.9932 10.1916C15.0605 10.4884 15.1502 10.7396 15.2623 10.9222C15.3744 11.1049 15.5089 11.2419 15.6883 11.3104C15.8676 11.3788 16.047 11.4245 16.2488 11.4245C16.4506 11.4245 16.6524 11.3788 16.8093 11.3104C16.9663 11.2419 17.1232 11.1049 17.2354 10.9222C17.3475 10.7396 17.4371 10.4884 17.482 10.1916C17.5493 9.89483 17.5717 9.52953 17.5717 9.09574V6.88113H17.5941ZM12.6287 21L17.0001 18L12.6287 15V21ZM8.00003 21L12.3715 18L8.00003 15V21Z"
      />
    </Svg>
  ),
);