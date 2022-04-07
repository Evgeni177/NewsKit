import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const TransitionPresetsInFigma: React.FC = () => {
  const mask0 = getSSRId();
  const mask1 = getSSRId();
  const clip0 = getSSRId();

  return (
    <Svg
      width="1345"
      height="759"
      viewBox="0 0 1345 759"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Rect width="1345" height="759" fill="illustrationBackground010" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M360.599 -93.0568C355.995 -98.4606 352.467 -104.928 350.441 -112.219C342.995 -139.019 358.684 -166.781 385.484 -174.227C412.284 -181.674 440.046 -165.984 447.493 -139.184C454.939 -112.384 439.25 -84.622 412.45 -77.1756C404.996 -75.1044 397.467 -74.8231 390.322 -76.0728C387.381 -74.5842 385.358 -71.9955 383.303 -68.2955C371.793 -47.5034 360.025 -26.8348 348.258 -6.16773L348.238 -6.13161L348.227 -6.11299C343.923 1.44591 339.62 9.00461 335.329 16.569C334.265 18.4274 333.274 20.3173 332.031 22.6879L332.027 22.6955C331.514 23.6747 330.957 24.7359 330.335 25.9107C465.56 -74.4885 611.148 -96.9003 771.057 -40.9172C772.386 -43.4814 773.734 -46.1394 775.111 -48.8542L775.116 -48.8632C778.401 -55.3406 781.851 -62.1417 785.594 -68.7666C792.006 -80.1138 799.1 -82.0848 810.426 -75.7442C835.508 -61.7102 860.545 -47.5597 885.505 -33.3099C897.303 -26.5805 899.067 -19.7662 892.302 -7.7231C878.373 17.0722 864.406 41.826 850.322 66.5342C843.67 78.234 836.635 80.1367 824.737 73.5132C799.897 59.6978 775.086 45.7966 750.309 31.8337C738.198 25.0091 736.383 17.8194 743.421 5.54444C745.858 1.28021 748.357 -2.93977 750.872 -7.18712C752.02 -9.12644 753.172 -11.0714 754.322 -13.029C599.789 -76.057 404.442 -29.9697 293.195 106.613C301.449 115.489 307.756 126.421 311.225 138.905C318.696 165.796 311.171 193.31 293.686 212.538C288.843 218.117 283.363 222.681 277.197 226.278C271.008 230.126 264.173 233.167 256.796 235.217C244.367 238.67 231.805 238.92 219.989 236.463C163.721 382.25 207.904 581.726 355.687 694.134C356.872 691.764 358.007 689.395 359.134 687.042C361.568 681.963 363.966 676.959 366.744 672.19C372.262 662.677 380.194 660.447 389.77 665.818C415.92 680.517 441.96 695.377 467.925 710.439C476.352 715.324 479.027 723.081 474.534 731.139C462.877 751.923 450.984 772.574 439.091 793.225C434.333 801.486 429.575 809.748 424.833 818.017L415.809 820.525C414.794 820.126 413.757 819.766 412.72 819.405C410.509 818.635 408.295 817.865 406.28 816.726C380.667 802.372 355.071 787.986 329.598 773.385C318.964 767.294 317.122 760.008 323.393 749.09C327.148 742.545 331.173 736.162 335.023 730.058L335.027 730.052L335.041 730.029C336.733 727.347 338.391 724.718 339.976 722.153C209.671 614.067 153.605 477.763 168.993 311.26C157.373 331.024 146.171 350.934 134.982 370.823L134.981 370.823L134.98 370.825C128.562 382.232 122.148 393.633 115.661 404.996C114.87 406.386 114.269 407.669 113.856 408.894C120.433 415.013 125.455 422.967 128.036 432.257C135.482 459.057 119.793 486.819 92.9927 494.265C66.1926 501.712 38.4304 486.023 30.984 459.223C23.5376 432.422 39.2268 404.66 66.0269 397.214C72.5555 395.4 79.1411 394.959 85.4763 395.717C86.372 395.124 87.1117 394.433 87.5558 393.647C116.628 342.388 145.508 291.02 174.58 239.309C178.238 232.802 181.899 226.29 185.563 219.773C173.85 209.961 164.884 196.623 160.485 180.788C148.919 139.163 173.287 96.0425 214.913 84.4767C230.843 80.0507 246.991 80.8872 261.506 85.9395C261.602 85.7924 261.698 85.6449 261.795 85.4969L262.017 85.1579C263.083 83.5293 264.189 81.839 265.174 80.0691C273.618 65.1164 282.053 50.1621 290.488 35.2089L290.555 35.0917C313.108 -4.89011 335.657 -44.8645 358.346 -84.7814C360.105 -87.8745 360.962 -90.3799 360.599 -93.0568ZM401.657 -107.682C392.683 -106.331 383.906 -111.859 381.415 -120.825C381.409 -120.846 381.403 -120.867 381.397 -120.888C380.246 -129.171 385.684 -136.92 393.861 -138.527C402.487 -140.222 410.987 -134.421 412.579 -125.792C414.05 -117.733 409.231 -110.007 401.657 -107.682ZM190.061 165.014C190.333 167.399 190.795 169.795 191.459 172.182C198.271 196.701 223.671 211.055 248.19 204.243C272.709 197.43 287.063 172.031 280.251 147.511C273.438 122.992 248.038 108.638 223.519 115.451C222.429 115.754 221.358 116.094 220.308 116.468C200.651 123.946 188.217 144.331 190.061 165.014ZM413.169 714.488L413.352 714.592C422.067 719.523 430.841 724.486 439.473 729.366C437.86 732.21 436.241 735.063 434.618 737.92L432.102 742.353L432.071 742.408C424.569 755.623 417.039 768.888 409.767 781.757C401.903 777.265 393.837 772.658 385.767 768.049L385.176 767.712C376.165 762.566 367.155 757.421 358.422 752.432C363.756 742.827 369.364 732.748 375.04 722.546L375.102 722.435C379.25 714.98 383.435 707.46 387.574 700.012C395.918 704.728 404.514 709.592 413.169 714.488ZM816.582 30.8916L816.521 30.8565L816.249 30.7008C803.73 23.5347 790.817 16.1434 777.917 8.74846C786.803 -6.97741 796.742 -24.5292 806.112 -41.0394C814.31 -36.3956 822.758 -31.6063 831.262 -26.7849L831.485 -26.6584C840.409 -21.5991 849.393 -16.5056 858.216 -11.5089C849.166 4.47028 839.228 22.0221 829.906 38.5188C825.529 36.0126 821.081 33.4668 816.582 30.8916ZM91.8349 439.169C94.3008 447.296 90.146 455.261 82.1059 457.755C73.6073 460.376 64.7368 455.484 62.3056 446.828C61.8551 445.243 61.635 443.699 61.6321 442.22C62.8521 436.048 67.2389 430.725 73.4961 428.543C81.5429 426.801 89.4085 431.219 91.8349 439.169Z"
          fill="illustrationPalette010"
        />
        <Path
          opacity="0.4"
          d="M301 162.5C301 197.57 272.57 226 237.5 226C202.43 226 174 197.57 174 162.5C174 127.43 202.43 99 237.5 99C272.57 99 301 127.43 301 162.5Z"
          fill="illustrationPalette010"
        />
        <Path
          opacity="0.4"
          d="M1088 272L1030 338L1218 730L1368 850L1380 674L1298 626L1282 570L1298 530L1332 506H1380L1368 370L1088 272Z"
          fill="illustrationPalette010"
        />
        <Path
          d="M1459.79 932.626C1455.61 928.034 1450.49 924.002 1447.46 918.787C1430.49 889.754 1413.9 860.515 1397.53 831.13C1394.06 824.894 1389.82 821.136 1382.93 818.939C1329.01 801.812 1275.23 784.221 1221.3 767.067C1212.4 764.23 1206.71 759.453 1202.71 750.783C1141.98 619.361 1081.02 488.031 1019.88 356.792C1015 346.323 1015.72 338.282 1023.82 329.706C1039.62 313.006 1054.82 295.695 1069.99 278.386C1076.29 271.166 1083.26 269.344 1092.28 272.388C1231 319.371 1369.74 366.3 1508.55 413.038C1517.06 415.896 1521.3 421.688 1524.69 429.347C1547.52 480.759 1570.64 532.021 1593.36 583.491C1596.41 590.392 1600.65 594.552 1607.58 597.469C1638.89 610.656 1669.97 624.309 1701.11 637.879C1717.64 645.094 1719.94 655.328 1707.87 668.776C1631.75 753.675 1555.57 838.551 1479.37 923.376C1476.51 926.555 1473.02 929.18 1469.83 932.056C1466.47 932.264 1463.13 932.445 1459.79 932.626ZM1082.36 312.967C1154.99 378.142 1227.09 442.838 1299.38 507.684C1348.75 473.401 1401.18 491.118 1427.01 520.955C1457.59 556.236 1458.51 606.826 1429.02 643.057C1400.54 678.029 1350.23 687.578 1310.57 665.423C1290.95 654.441 1276.73 638.456 1268.74 617.476C1257.63 588.314 1260.92 560.059 1274.92 535.48C1201.87 469.925 1129.83 405.253 1057.53 340.407C1052.94 343.653 1050.7 347.656 1054.27 355.305C1112.45 479.826 1170.22 604.503 1228.4 729.024C1230.33 733.148 1235.08 737.307 1239.41 738.732C1289.29 755.329 1339.4 771.298 1389.33 787.813C1396.06 790.044 1399.93 788.925 1404.62 783.639C1456.52 725.397 1508.62 667.332 1560.88 609.446C1565.58 604.24 1566.38 600.262 1563.44 593.784C1542.03 546.846 1520.9 499.811 1500.12 452.598C1496.89 445.252 1492.5 441.261 1484.89 438.702C1356.2 395.432 1227.54 351.945 1099.04 308.156C1090.88 305.385 1085.77 305.769 1082.36 312.967ZM1592.31 625.838C1535.92 688.578 1480.13 750.643 1423.94 813.159C1437.87 837.564 1452.29 862.826 1466.19 887.153C1534.44 811.11 1602.16 735.658 1670.29 659.756C1644.28 648.424 1617.52 636.785 1592.31 625.838ZM1294.34 586.541C1296.17 620.915 1325.62 647.344 1359.85 645.33C1393.52 643.346 1419.93 614.027 1418.42 580.304C1416.89 546.073 1387.43 519.458 1353.14 521.288C1318.36 523.171 1292.49 551.899 1294.34 586.541Z"
          fill="illustrationPalette010"
        />
        <Path
          d="M486 153.719C486 148.905 489.929 145.002 494.753 145.002C607.631 145.002 681.323 145.002 780.525 145.002C780.525 182.335 780.525 182.335 780.525 224.335H860V605.285C860 610.099 856.09 614.002 851.267 614.002H494.733C489.91 614.002 486 610.099 486 605.285V153.719Z"
          fill="illustrationPalette010"
        />
        <g>
          <Path
            d="M486 153.719C486 148.905 489.929 145.002 494.753 145.002C607.631 145.002 681.323 145.002 780.525 145.002C780.525 182.335 780.525 182.335 780.525 224.335H860V605.285C860 610.099 856.09 614.002 851.267 614.002H494.733C489.91 614.002 486 610.099 486 605.285V153.719Z"
            fill="illustrationGradient010"
          />
        </g>
        <Path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M798.396 127.314V127.002H494.463C479.91 127.002 468 138.766 468 153.393V605.611C468 620.186 479.839 632.002 494.443 632.002H851.557C866.161 632.002 878 620.186 878 605.611V206.45H877.844L878 206.294L798.708 127.002L798.396 127.314ZM780.7 224.111V144.663H494.463C489.632 144.663 485.696 148.572 485.696 153.393V605.611C485.696 610.432 489.612 614.341 494.443 614.341H851.557C856.388 614.341 860.304 610.432 860.304 605.611V224.111H780.7Z"
          fill="illustrationPalette030"
        />
        <Path
          d="M907.852 670.5C907.852 672.985 878.75 675 842.852 675C806.953 675 777.852 672.985 777.852 670.5C777.852 668.015 806.953 666 842.852 666C878.75 666 907.852 668.015 907.852 670.5Z"
          fill="illustrationSubtle010"
        />
        <mask
          id={mask0}
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="754"
          y="494"
          width="177"
          height="176"
        >
          <Path
            d="M819.789 497.72C772.961 510.268 745.148 558.314 757.667 605.035C770.185 651.756 818.296 679.458 865.124 666.911C911.952 654.363 939.766 606.317 927.247 559.596C914.728 512.875 866.618 485.172 819.789 497.72Z"
            fill="white"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M820.025 498.599C773.68 511.017 746.157 558.566 758.546 604.799C770.934 651.033 818.544 678.45 864.888 666.032C911.233 653.614 938.756 606.065 926.368 559.832C913.979 513.598 866.37 486.181 820.025 498.599ZM757.667 605.035C745.148 558.314 772.961 510.268 819.789 497.72C866.618 485.172 914.728 512.875 927.247 559.596C939.766 606.317 911.952 654.363 865.124 666.911C818.296 679.458 770.185 651.756 757.667 605.035Z"
            fill="illustrationInterface020"
          />
        </mask>
        <g mask={`url(#${mask0})`}>
          <Path
            d="M819.789 497.72C772.961 510.268 745.148 558.314 757.667 605.035C770.185 651.756 818.296 679.458 865.124 666.911C911.952 654.363 939.766 606.317 927.247 559.596C914.728 512.875 866.618 485.172 819.789 497.72Z"
            fill="illustrationPalette070"
          />
        </g>
        <mask
          id={mask1}
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="754"
          y="494"
          width="177"
          height="176"
        >
          <Path
            d="M819.789 497.72C772.961 510.268 745.148 558.314 757.667 605.035C770.185 651.756 818.296 679.458 865.124 666.911C911.952 654.363 939.766 606.317 927.247 559.596C914.728 512.875 866.618 485.172 819.789 497.72Z"
            fill="white"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M820.025 498.599C773.68 511.017 746.157 558.566 758.546 604.799C770.934 651.033 818.544 678.45 864.888 666.032C911.233 653.614 938.756 606.065 926.368 559.832C913.979 513.598 866.37 486.181 820.025 498.599ZM757.667 605.035C745.148 558.314 772.961 510.268 819.789 497.72C866.618 485.172 914.728 512.875 927.247 559.596C939.766 606.317 911.952 654.363 865.124 666.911C818.296 679.458 770.185 651.756 757.667 605.035Z"
            fill="illustrationInterface020"
          />
        </mask>
        <g mask={`url(#${mask1})`}>
          <Path
            d="M819.789 497.72C772.961 510.268 745.148 558.314 757.667 605.035C770.185 651.756 818.296 679.458 865.124 666.911C911.952 654.363 939.766 606.317 927.247 559.596C914.728 512.875 866.618 485.172 819.789 497.72Z"
            fill="illustrationPalette060"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M928.905 567.878C920.939 521.749 895.27 511.054 894.679 510.737C877.404 501.493 839.662 484.386 813.074 493.933C786.486 503.48 759.851 560.32 787.745 587.731C812.95 612.5 808.624 640.327 826.394 650.404C844.163 660.482 869.477 661.26 893.556 649.632C917.635 638.005 936.872 614.006 928.905 567.878Z"
            fill="illustrationPalette050"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M894.37 511.597C894.308 511.568 894.268 511.549 894.25 511.54C885.642 506.933 871.952 500.378 857.12 496.164C842.263 491.942 826.406 490.113 813.382 494.789C806.944 497.101 800.421 502.313 794.682 509.338C788.952 516.351 784.053 525.113 780.839 534.43C774.395 553.111 774.8 573.734 788.383 587.082C801.136 599.614 806.412 612.926 810.709 624.254C810.824 624.559 810.939 624.861 811.053 625.162C815.214 636.149 818.529 644.898 826.843 649.613C844.314 659.521 869.309 660.331 893.161 648.813C905.064 643.065 915.725 634.282 922.439 621.275C929.152 608.269 931.966 590.947 928.009 568.032C924.053 545.126 915.714 531.077 908.344 522.73C901.423 514.891 895.329 512.045 894.37 511.597ZM894.798 510.794C896.785 511.723 921.176 523.124 928.905 567.878C936.872 614.006 917.635 638.005 893.556 649.632C869.477 661.26 844.163 660.482 826.394 650.404C817.789 645.524 814.365 636.482 810.26 625.64C805.889 614.093 800.744 600.506 787.745 587.731C759.851 560.32 786.486 503.48 813.074 493.933C839.662 484.386 877.404 501.493 894.679 510.737C894.697 510.747 894.737 510.765 894.798 510.794Z"
            fill="illustrationPalette050"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M924.999 526.041C945.232 554.666 937.234 573.95 937.087 574.431C932.79 588.491 927.037 607.94 907.809 617.007C888.58 626.074 857.442 617.208 856.789 616.972C843.857 612.308 843.925 590.711 836.04 577.059C827.568 562.391 820.932 549.734 825.05 534.971C829.168 520.208 848.473 509.834 862.788 501.572C876.745 493.516 904.765 497.416 924.999 526.041Z"
            fill="illustrationPalette040"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M936.25 574.07C936.233 574.118 936.221 574.15 936.217 574.165L936.101 574.544C931.799 588.626 926.065 607.392 907.421 616.184C898.042 620.606 885.662 620.681 875.431 619.573C870.336 619.021 865.814 618.18 862.526 617.463C860.883 617.104 859.549 616.777 858.609 616.532C858.138 616.41 857.767 616.309 857.505 616.235C857.374 616.198 857.271 616.168 857.198 616.146C857.143 616.13 857.113 616.121 857.102 616.117C857.096 616.115 857.095 616.115 857.097 616.116C851.081 613.946 847.975 607.802 845.384 600.096C844.743 598.189 844.14 596.209 843.531 594.195C843.476 594.012 843.421 593.829 843.366 593.646C842.812 591.812 842.252 589.954 841.655 588.118C840.345 584.082 838.847 580.1 836.828 576.604C828.331 561.89 821.925 549.561 825.927 535.216C827.905 528.123 833.567 521.99 840.649 516.555C846.953 511.718 854.265 507.519 860.866 503.728C861.67 503.266 862.463 502.81 863.243 502.36C876.673 494.609 904.206 498.201 924.256 526.566C934.279 540.747 937.276 552.562 937.777 560.845C938.247 568.619 936.523 573.325 936.25 574.07ZM937.12 574.338C937.686 572.792 944.629 553.812 924.999 526.041C904.765 497.416 876.745 493.516 862.788 501.572C862.01 502.021 861.217 502.476 860.412 502.938C846.419 510.975 828.945 521.01 825.05 534.971C820.932 549.734 827.568 562.391 836.04 577.059C838.907 582.024 840.723 588.04 842.495 593.91C845.595 604.18 848.56 614.004 856.789 616.972C857.442 617.208 888.58 626.074 907.809 617.007C926.82 608.042 932.659 588.929 936.941 574.909C936.99 574.749 937.039 574.59 937.087 574.431C937.091 574.416 937.103 574.385 937.12 574.338Z"
            fill="illustrationPalette040"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M927.068 529.273C938.679 545.7 934.089 556.766 934.005 557.043C931.539 565.111 928.237 576.272 917.203 581.475C906.168 586.678 888.299 581.591 887.924 581.455C880.503 578.779 880.542 566.385 876.017 558.551C871.156 550.133 867.347 542.87 869.711 534.398C872.074 525.926 883.152 519.973 891.367 515.231C899.377 510.609 915.456 512.847 927.068 529.273Z"
            fill="illustrationPalette030"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M933.154 556.722C933.144 556.749 933.137 556.768 933.134 556.777L933.081 556.95C930.603 565.059 927.358 575.681 916.815 580.652C911.534 583.142 904.519 583.197 898.664 582.562C895.757 582.248 893.176 581.768 891.3 581.358C890.362 581.154 889.601 580.967 889.066 580.828C888.528 580.688 888.252 580.605 888.234 580.6L888.233 580.599C884.972 579.423 883.236 576.077 881.747 571.647C881.381 570.559 881.037 569.428 880.688 568.272C880.656 568.167 880.624 568.062 880.592 567.957C880.275 566.905 879.952 565.835 879.609 564.777C878.854 562.453 877.985 560.138 876.805 558.096C871.918 549.633 868.34 542.697 870.587 534.643C871.688 530.696 874.855 527.241 878.899 524.138C882.494 521.379 886.666 518.982 890.457 516.805C890.918 516.54 891.374 516.278 891.822 516.02C899.304 511.701 914.897 513.632 926.324 529.799C932.037 537.88 933.731 544.592 934.013 549.269C934.278 553.654 933.31 556.296 933.154 556.722ZM934.024 556.989C934.348 556.102 938.333 545.21 927.068 529.273C915.456 512.847 899.377 510.609 891.367 515.231C890.92 515.489 890.465 515.751 890.004 516.016C881.973 520.627 871.946 526.386 869.711 534.398C867.347 542.87 871.156 550.133 876.017 558.551C877.663 561.4 878.705 564.852 879.721 568.221C881.5 574.115 883.202 579.752 887.924 581.455C888.299 581.591 906.168 586.678 917.203 581.475C928.113 576.331 931.463 565.362 933.921 557.317C933.949 557.225 933.977 557.134 934.005 557.043C934.007 557.034 934.014 557.017 934.024 556.989Z"
            fill="illustrationPalette030"
          />
        </g>
        <Path
          d="M895.852 583.573C895.852 587.439 892.718 590.573 888.852 590.573H857.423C853.557 590.573 850.423 593.707 850.423 597.573V629.002C850.423 632.868 847.289 636.002 843.423 636.002H842.28C838.414 636.002 835.28 632.868 835.28 629.002V597.573C835.28 593.707 832.146 590.573 828.28 590.573H796.852C792.986 590.573 789.852 587.439 789.852 583.573V582.431C789.852 578.565 792.986 575.431 796.852 575.431H828.28C832.146 575.431 835.28 572.297 835.28 568.431V537.002C835.28 533.136 838.414 530.002 842.28 530.002H843.423C847.289 530.002 850.423 533.136 850.423 537.002V568.431C850.423 572.297 853.557 575.431 857.423 575.431H888.852C892.718 575.431 895.852 578.565 895.852 582.431V583.573Z"
          fill="white"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M842.28 533.002C840.071 533.002 838.28 534.793 838.28 537.002V568.431C838.28 573.953 833.803 578.431 828.28 578.431H796.852C794.642 578.431 792.852 580.221 792.852 582.431V583.573C792.852 585.783 794.642 587.573 796.852 587.573H828.28C833.803 587.573 838.28 592.051 838.28 597.573V629.002C838.28 631.211 840.071 633.002 842.28 633.002H843.423C845.632 633.002 847.423 631.211 847.423 629.002V597.573C847.423 592.051 851.9 587.573 857.423 587.573H888.852C891.061 587.573 892.852 585.783 892.852 583.573V582.431C892.852 580.221 891.061 578.431 888.852 578.431H857.423C851.9 578.431 847.423 573.953 847.423 568.431V537.002C847.423 534.793 845.632 533.002 843.423 533.002H842.28ZM832.28 537.002C832.28 531.479 836.757 527.002 842.28 527.002H843.423C848.946 527.002 853.423 531.479 853.423 537.002V568.431C853.423 570.64 855.214 572.431 857.423 572.431H888.852C894.374 572.431 898.852 576.908 898.852 582.431V583.573C898.852 589.096 894.374 593.573 888.852 593.573H857.423C855.214 593.573 853.423 595.364 853.423 597.573V629.002C853.423 634.525 848.946 639.002 843.423 639.002H842.28C836.757 639.002 832.28 634.525 832.28 629.002V597.573C832.28 595.364 830.489 593.573 828.28 593.573H796.852C791.329 593.573 786.852 589.096 786.852 583.573V582.431C786.852 576.908 791.329 572.431 796.852 572.431H828.28C830.489 572.431 832.28 570.64 832.28 568.431V537.002Z"
          fill="white"
        />
        <Path
          opacity="0.4"
          d="M633 500C654.528 500 672 481.856 672 459.5V419H633C611.472 419 594 437.144 594 459.5C594 481.856 611.472 500 633 500Z"
          fill="illustrationPalette030"
        />
        <Path
          opacity="0.4"
          d="M594 379C594 356.92 611.472 339 633 339H672V419H633C611.472 419 594 401.08 594 379Z"
          fill="illustrationPalette030"
        />
        <Path
          opacity="0.4"
          d="M594 299.002C594 276.922 611.472 259.002 633 259.002H672V339.002H633C611.472 339.002 594 321.082 594 299.002Z"
          fill="illustrationInterface030"
        />
        <Path
          opacity="0.4"
          d="M672 259.002H711.5C733.304 259.002 751 276.922 751 299.002C751 321.082 733.304 339.002 711.5 339.002H672V259.002Z"
          fill="illustrationPalette030"
        />
        <Path
          opacity="0.4"
          d="M751 379C751 401.08 733.304 419 711.5 419C689.696 419 672 401.08 672 379C672 356.92 689.696 339 711.5 339C733.304 339 751 356.92 751 379Z"
          fill="illustrationPalette030"
        />
      </g>
      <defs>
        <clipPath id={clip0}>
          <Rect width="1345" height="759" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default TransitionPresetsInFigma;