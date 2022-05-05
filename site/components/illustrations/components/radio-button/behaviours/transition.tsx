import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';

export const Transition: React.FC = () => {
  const filter0 = getSSRId();
  const filter1 = getSSRId();
  const filter2 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M0 0H1490V838H0V0Z" fill="illustrationBackground020" />
      <Path
        d="M203 400.5C203 351.528 243.071 311 292.5 311C341.929 311 382 351.528 382 400.5C382 449.472 341.929 490 292.5 490C243.071 490 203 449.472 203 400.5Z"
        fill="interface010"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M292.5 500C237.98 500 194 454.874 194 400.5C194 346.126 237.98 301 292.5 301C347.02 301 391 346.126 391 400.5C391 454.874 347.02 500 292.5 500ZM292.5 310.95C243.586 310.95 203.933 351.501 203.933 400.5C203.933 449.499 243.586 490.05 292.5 490.05C341.414 490.05 381.067 449.499 381.067 400.5C381.067 351.501 341.414 310.95 292.5 310.95Z"
        fill="illustrationPalette040"
      />
      <g filter={`url(#${filter0})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M287.201 509.17L281.226 500.04C277.146 493.806 268.455 491.532 261.808 494.949L263.357 494.153C261.707 495.001 260.916 497.115 261.595 498.873L269.866 520.272C271.177 523.665 274.526 528.462 277.301 530.873C277.301 530.873 293.94 544.645 293.94 549.808V556.346H320.898H328.27H334.377H341.116V549.808C341.116 544.645 351.285 528.381 351.285 528.381C353.157 525.22 354.717 519.651 354.717 515.953V488.761C354.595 482.741 349.478 477.862 343.163 477.862C340.004 477.862 337.445 480.301 337.445 483.313V485.491C337.445 479.471 332.328 474.592 326.013 474.592C322.854 474.592 320.296 477.031 320.296 480.043V482.221C320.296 476.201 315.178 471.322 308.864 471.322C305.705 471.322 303.146 473.761 303.146 476.773V478.951C303.146 477.983 303.043 477.214 302.843 476.605L301.099 448.523C300.863 444.726 297.662 441.775 293.94 441.775C290.192 441.775 287.201 444.792 287.201 448.514V475.472V509.17Z"
          fill="white"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M263.402 494.247C268.752 492.289 275.01 493.645 279.11 497.517C279.902 498.265 280.613 499.107 281.222 500.037L287.197 509.167V448.511C287.197 444.79 290.188 441.773 293.936 441.773C297.658 441.773 300.859 444.723 301.095 448.52L302.839 476.602C302.857 476.657 302.874 476.713 302.89 476.77C303.056 477.352 303.142 478.068 303.142 478.948V476.77C303.142 476.708 303.143 476.645 303.145 476.583C303.146 476.555 303.148 476.528 303.149 476.5C303.296 473.614 305.796 471.319 308.86 471.319C309.459 471.319 310.047 471.363 310.622 471.448C311.975 471.647 313.251 472.073 314.404 472.684C317.277 474.205 319.39 476.874 320.064 480.041C320.213 480.744 320.292 481.473 320.292 482.218V480.041C320.292 477.029 322.851 474.589 326.01 474.589C326.263 474.589 326.515 474.597 326.765 474.613C328.494 474.72 330.119 475.194 331.553 475.954C334.427 477.476 336.54 480.144 337.213 483.311C337.363 484.014 337.441 484.743 337.441 485.489V483.311C337.441 480.299 340 477.859 343.159 477.859C343.413 477.859 343.665 477.867 343.915 477.883C349.877 478.254 354.596 482.98 354.713 488.759V515.951C354.713 519.648 353.153 525.218 351.281 528.379C351.281 528.379 341.112 544.642 341.112 549.806V556.343H293.936V549.806C293.936 544.642 277.297 530.87 277.297 530.87C274.522 528.46 271.173 523.662 269.862 520.27L261.591 498.87C261.138 497.697 261.339 496.365 262.014 495.356C262.245 495.012 262.53 494.706 262.863 494.457C263.042 494.383 263.222 494.313 263.402 494.247ZM261.804 494.947C262.152 494.768 262.505 494.604 262.863 494.457C263.017 494.342 263.18 494.239 263.353 494.15L261.804 494.947ZM258.166 487.871C253.836 490.995 252.118 496.792 254.048 501.786L262.319 523.185C264.1 527.794 268.213 533.692 271.994 536.976L272.067 537.039L272.139 537.099L272.141 537.1L272.17 537.125L272.289 537.225C272.398 537.315 272.562 537.454 272.775 537.634C273.2 537.996 273.815 538.524 274.556 539.176C276.047 540.486 278.009 542.263 279.948 544.169C281.923 546.111 283.706 548.021 284.939 549.616C285.363 550.165 285.657 550.593 285.849 550.902V564.43H349.2V549.944C349.2 549.978 349.202 549.995 349.206 549.996C349.234 550.001 349.383 549.24 350.148 547.434C350.96 545.517 352.098 543.251 353.314 540.997C354.517 538.768 355.729 536.674 356.646 535.13C357.103 534.361 357.482 533.736 357.744 533.306C357.875 533.092 357.977 532.927 358.044 532.818L358.119 532.698L358.138 532.666L358.19 532.584L358.24 532.499C359.652 530.114 360.748 527.211 361.492 524.528C362.235 521.85 362.8 518.77 362.8 515.951V488.677L362.799 488.595C362.582 477.913 353.612 469.772 343.159 469.772C341.447 469.772 339.774 470.089 338.217 470.677C334.823 468.043 330.54 466.502 326.01 466.502C324.297 466.502 322.624 466.819 321.067 467.407C317.989 465.017 314.178 463.527 310.114 463.271L309.167 448.019C308.664 439.93 301.902 433.686 293.936 433.686C285.703 433.686 279.11 440.342 279.11 448.511V487.768C273.155 484.804 265.991 484.382 259.686 487.019M286.123 551.404C286.121 551.403 286.107 551.374 286.086 551.318C286.115 551.377 286.125 551.405 286.123 551.404ZM258.166 487.871L258.106 487.754L259.655 486.958"
          fill="black"
        />
      </g>
      <Path
        d="M626 400.5C626 351.528 666.071 311 715.5 311C764.929 311 805 351.528 805 400.5C805 449.472 764.929 490 715.5 490C666.071 490 626 449.472 626 400.5Z"
        fill="interface010"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M715.5 500C660.98 500 617 454.874 617 400.5C617 346.126 660.98 301 715.5 301C770.02 301 814 346.126 814 400.5C814 454.874 770.02 500 715.5 500ZM715.5 310.95C666.586 310.95 626.933 351.501 626.933 400.5C626.933 449.499 666.586 490.05 715.5 490.05C764.414 490.05 804.067 449.499 804.067 400.5C804.067 351.501 764.414 310.95 715.5 310.95Z"
        fill="illustrationPalette040"
      />
      <Path
        d="M659 402C659 370.52 684.296 345 715.5 345C746.704 345 772 370.52 772 402C772 433.48 746.704 459 715.5 459C684.296 459 659 433.48 659 402Z"
        fill="illustrationPalette040"
      />
      <g filter={`url(#${filter1})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M709.395 509.17L703.42 500.04C699.34 493.806 690.649 491.532 684.002 494.949L685.551 494.153C683.901 495.001 683.11 497.115 683.789 498.873L692.06 520.272C693.372 523.665 696.721 528.462 699.495 530.873C699.495 530.873 716.135 544.645 716.135 549.808V556.346H743.092H750.464H756.571H763.311V549.808C763.311 544.645 773.479 528.381 773.479 528.381C775.351 525.22 776.911 519.651 776.911 515.953V488.761C776.789 482.741 771.672 477.862 765.357 477.862C762.199 477.862 759.64 480.301 759.64 483.313V485.491C759.64 479.471 754.522 474.592 748.208 474.592C745.049 474.592 742.49 477.031 742.49 480.043V482.221C742.49 476.201 737.373 471.322 731.058 471.322C727.899 471.322 725.34 473.761 725.34 476.773V478.951C725.34 477.983 725.237 477.214 725.037 476.605L723.293 448.523C723.057 444.726 719.857 441.775 716.135 441.775C712.387 441.775 709.395 444.792 709.395 448.514V475.472V509.17Z"
          fill="white"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M685.597 494.247C690.947 492.289 697.205 493.645 701.304 497.517C702.096 498.265 702.807 499.107 703.416 500.037L709.391 509.167V448.511C709.391 444.79 712.383 441.773 716.131 441.773C719.853 441.773 723.053 444.723 723.289 448.52L725.033 476.602C725.051 476.657 725.068 476.713 725.085 476.77C725.251 477.352 725.336 478.068 725.336 478.948V476.77C725.336 476.708 725.338 476.645 725.34 476.583C725.341 476.555 725.342 476.528 725.343 476.5C725.491 473.614 727.99 471.319 731.054 471.319C731.653 471.319 732.242 471.363 732.816 471.448C734.17 471.647 735.445 472.073 736.598 472.684C739.471 474.205 741.585 476.874 742.258 480.041C742.408 480.744 742.486 481.473 742.486 482.218V480.041C742.486 477.029 745.045 474.589 748.204 474.589C748.458 474.589 748.71 474.597 748.96 474.613C750.689 474.72 752.313 475.194 753.748 475.954C756.621 477.476 758.734 480.144 759.408 483.311C759.557 484.014 759.636 484.743 759.636 485.489V483.311C759.636 480.299 762.195 477.859 765.354 477.859C765.607 477.859 765.859 477.867 766.109 477.883C772.072 478.254 776.79 482.98 776.907 488.759V515.951C776.907 519.648 775.347 525.218 773.475 528.379C773.475 528.379 763.307 544.642 763.307 549.806V556.343H716.131V549.806C716.131 544.642 699.492 530.87 699.492 530.87C696.717 528.46 693.368 523.662 692.057 520.27L683.785 498.87C683.332 497.697 683.534 496.365 684.209 495.356C684.439 495.012 684.724 494.706 685.058 494.457C685.236 494.383 685.416 494.313 685.597 494.247ZM683.998 494.947C684.346 494.768 684.7 494.604 685.058 494.457C685.211 494.342 685.374 494.239 685.547 494.15L683.998 494.947ZM680.36 487.871C676.031 490.995 674.312 496.792 676.242 501.786L684.513 523.185C686.295 527.794 690.407 533.692 694.188 536.976L694.261 537.039L694.333 537.099L694.335 537.1L694.364 537.125L694.484 537.225C694.592 537.315 694.757 537.454 694.969 537.634C695.395 537.996 696.01 538.524 696.751 539.176C698.241 540.486 700.203 542.263 702.142 544.169C704.117 546.111 705.9 548.021 707.133 549.616C707.557 550.165 707.851 550.593 708.043 550.902V564.43H771.394V549.944C771.394 549.978 771.396 549.995 771.4 549.996C771.428 550.001 771.577 549.24 772.342 547.434C773.154 545.517 774.292 543.251 775.508 540.997C776.711 538.768 777.923 536.674 778.84 535.13C779.297 534.361 779.676 533.736 779.938 533.306C780.069 533.092 780.171 532.927 780.239 532.818L780.313 532.698L780.333 532.666L780.384 532.584L780.434 532.499C781.847 530.114 782.942 527.211 783.686 524.528C784.429 521.85 784.995 518.77 784.995 515.951V488.677L784.993 488.595C784.777 477.913 775.806 469.772 765.354 469.772C763.641 469.772 761.968 470.089 760.411 470.677C757.018 468.043 752.735 466.502 748.204 466.502C746.491 466.502 744.818 466.819 743.262 467.407C740.183 465.017 736.372 463.527 732.308 463.271L731.361 448.019C730.859 439.93 724.096 433.686 716.131 433.686C707.897 433.686 701.304 440.342 701.304 448.511V487.768C695.35 484.804 688.185 484.382 681.881 487.019M708.318 551.404C708.316 551.403 708.301 551.374 708.28 551.318C708.309 551.377 708.319 551.405 708.318 551.404ZM680.36 487.871L680.3 487.754L681.849 486.958"
          fill="black"
        />
      </g>
      <Path
        opacity="0.2"
        d="M989.027 400.5C989.027 315.739 1057.74 247.026 1142.5 247.026C1227.26 247.026 1295.97 315.739 1295.97 400.5C1295.97 485.261 1227.26 553.973 1142.5 553.973C1057.74 553.973 989.027 485.261 989.027 400.5Z"
        fill="illustrationPalette040"
      />
      <Path
        d="M1053 401.5C1053 352.528 1093.07 312 1142.5 312C1191.93 312 1232 352.528 1232 401.5C1232 450.472 1191.93 491 1142.5 491C1093.07 491 1053 450.472 1053 401.5Z"
        fill="interface010"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1142.5 501C1087.98 501 1044 455.874 1044 401.5C1044 347.126 1087.98 302 1142.5 302C1197.02 302 1241 347.126 1241 401.5C1241 455.874 1197.02 501 1142.5 501ZM1142.5 311.95C1093.59 311.95 1053.93 352.501 1053.93 401.5C1053.93 450.499 1093.59 491.05 1142.5 491.05C1191.41 491.05 1231.07 450.499 1231.07 401.5C1231.07 352.501 1191.41 311.95 1142.5 311.95Z"
        fill="illustrationPalette040"
      />
      <Path
        d="M1086 403C1086 371.52 1111.3 346 1142.5 346C1173.7 346 1199 371.52 1199 403C1199 434.48 1173.7 460 1142.5 460C1111.3 460 1086 434.48 1086 403Z"
        fill="illustrationPalette040"
      />
      <g filter={`url(#${filter2})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1137.29 509.17L1131.32 500.04C1127.24 493.806 1118.55 491.532 1111.9 494.949L1113.45 494.153C1111.8 495.001 1111.01 497.115 1111.69 498.873L1119.96 520.272C1121.27 523.665 1124.62 528.462 1127.4 530.873C1127.4 530.873 1144.03 544.645 1144.03 549.808V556.346H1170.99H1178.36H1184.47H1191.21V549.808C1191.21 544.645 1201.38 528.381 1201.38 528.381C1203.25 525.22 1204.81 519.651 1204.81 515.953V488.761C1204.69 482.741 1199.57 477.862 1193.26 477.862C1190.1 477.862 1187.54 480.301 1187.54 483.313V485.491C1187.54 479.471 1182.42 474.592 1176.11 474.592C1172.95 474.592 1170.39 477.031 1170.39 480.043V482.221C1170.39 476.201 1165.27 471.322 1158.96 471.322C1155.8 471.322 1153.24 473.761 1153.24 476.773V478.951C1153.24 477.983 1153.14 477.214 1152.94 476.605L1151.19 448.523C1150.96 444.726 1147.76 441.775 1144.03 441.775C1140.29 441.775 1137.29 444.792 1137.29 448.514V475.472V509.17Z"
          fill="white"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1113.5 494.247C1118.85 492.289 1125.1 493.645 1129.2 497.517C1130 498.265 1130.71 499.107 1131.32 500.037L1137.29 509.167V448.511C1137.29 444.79 1140.28 441.773 1144.03 441.773C1147.75 441.773 1150.95 444.723 1151.19 448.52L1152.93 476.602C1152.95 476.657 1152.97 476.713 1152.98 476.77C1153.15 477.352 1153.24 478.068 1153.24 478.948V476.77C1153.24 476.708 1153.24 476.645 1153.24 476.583C1153.24 476.555 1153.24 476.528 1153.24 476.5C1153.39 473.614 1155.89 471.319 1158.95 471.319C1159.55 471.319 1160.14 471.363 1160.72 471.448C1162.07 471.647 1163.34 472.073 1164.5 472.684C1167.37 474.205 1169.48 476.874 1170.16 480.041C1170.31 480.744 1170.39 481.473 1170.39 482.218V480.041C1170.39 477.029 1172.94 474.589 1176.1 474.589C1176.36 474.589 1176.61 474.597 1176.86 474.613C1178.59 474.72 1180.21 475.194 1181.65 475.954C1184.52 477.476 1186.63 480.144 1187.31 483.311C1187.46 484.014 1187.54 484.743 1187.54 485.489V483.311C1187.54 480.299 1190.09 477.859 1193.25 477.859C1193.51 477.859 1193.76 477.867 1194.01 477.883C1199.97 478.254 1204.69 482.98 1204.81 488.759V515.951C1204.81 519.648 1203.25 525.218 1201.38 528.379C1201.38 528.379 1191.21 544.642 1191.21 549.806V556.343H1144.03V549.806C1144.03 544.642 1127.39 530.87 1127.39 530.87C1124.62 528.46 1121.27 523.662 1119.96 520.27L1111.69 498.87C1111.23 497.697 1111.43 496.365 1112.11 495.356C1112.34 495.012 1112.62 494.706 1112.96 494.457C1113.14 494.383 1113.32 494.313 1113.5 494.247ZM1111.9 494.947C1112.25 494.768 1112.6 494.604 1112.96 494.457C1113.11 494.342 1113.27 494.239 1113.45 494.15L1111.9 494.947ZM1108.26 487.871C1103.93 490.995 1102.21 496.792 1104.14 501.786L1112.41 523.185C1114.19 527.794 1118.31 533.692 1122.09 536.976L1122.16 537.039L1122.23 537.099L1122.23 537.1L1122.26 537.125L1122.38 537.225C1122.49 537.315 1122.66 537.454 1122.87 537.634C1123.29 537.996 1123.91 538.524 1124.65 539.176C1126.14 540.486 1128.1 542.263 1130.04 544.169C1132.02 546.111 1133.8 548.021 1135.03 549.616C1135.46 550.165 1135.75 550.593 1135.94 550.902V564.43H1199.29V549.944C1199.29 549.978 1199.3 549.995 1199.3 549.996C1199.33 550.001 1199.48 549.24 1200.24 547.434C1201.05 545.517 1202.19 543.251 1203.41 540.997C1204.61 538.768 1205.82 536.674 1206.74 535.13C1207.2 534.361 1207.58 533.736 1207.84 533.306C1207.97 533.092 1208.07 532.927 1208.14 532.818L1208.21 532.698L1208.23 532.666L1208.28 532.584L1208.33 532.499C1209.75 530.114 1210.84 527.211 1211.59 524.528C1212.33 521.85 1212.89 518.77 1212.89 515.951V488.677L1212.89 488.595C1212.68 477.913 1203.71 469.772 1193.25 469.772C1191.54 469.772 1189.87 470.089 1188.31 470.677C1184.92 468.043 1180.63 466.502 1176.1 466.502C1174.39 466.502 1172.72 466.819 1171.16 467.407C1168.08 465.017 1164.27 463.527 1160.21 463.271L1159.26 448.019C1158.76 439.93 1152 433.686 1144.03 433.686C1135.8 433.686 1129.2 440.342 1129.2 448.511V487.768C1123.25 484.804 1116.08 484.382 1109.78 487.019M1136.22 551.404C1136.22 551.403 1136.2 551.374 1136.18 551.318C1136.21 551.377 1136.22 551.405 1136.22 551.404ZM1108.26 487.871L1108.2 487.754L1109.75 486.958"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="166.619"
          y="384.796"
          width="281.836"
          height="281.836"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.5438" />
          <feGaussianBlur stdDeviation="16.5438" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_973_177890"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_973_177890"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="588.815"
          y="384.796"
          width="281.837"
          height="281.836"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.5438" />
          <feGaussianBlur stdDeviation="16.5438" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_973_177890"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_973_177890"
            result="shape"
          />
        </filter>
        <filter
          id={filter2}
          x="1016.71"
          y="384.796"
          width="281.837"
          height="281.836"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.5438" />
          <feGaussianBlur stdDeviation="16.5438" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_973_177890"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_973_177890"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Transition;
