import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const BannerBehavioursTextOverflowIllustration: React.FC = () => {
  const filter0 = getSSRId();

  return (
    <Svg
      width="1491"
      height="839"
      viewBox="0 0 1491 839"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0 4.00001C0 1.79087 1.79086 0 4 0H1486.72C1488.93 0 1490.72 1.79086 1490.72 4V834.004C1490.72 836.213 1488.93 838.004 1486.72 838.004H4.00002C1.79088 838.004 0 836.213 0 834.004V4.00001Z"
        fill="illustrationBackground010"
      />
      <g filter={`url(#${filter0})`}>
        <Rect
          x="198"
          y="285"
          width="1062"
          height="269"
          rx="17.3496"
          fill="illustrationInterface010"
        />
        <Rect
          x="273.389"
          y="407.046"
          width="564"
          height="24"
          rx="12"
          fill="illustrationInterface020"
        />
        <Rect
          x="273"
          y="357"
          width="415.529"
          height="24"
          rx="12"
          fill="illustrationInterface030"
        />
        <Rect
          x="273.389"
          y="457.046"
          width="477"
          height="24"
          rx="12"
          fill="illustrationInterface020"
        />
        <Rect
          x="938"
          y="378"
          width="269.486"
          height="83.1539"
          rx="41.5769"
          fill="illustrationInterface020"
        />
        <Path
          d="M1030.14 420.585C1031.55 420.886 1032.69 421.592 1033.54 422.702C1034.4 423.789 1034.83 425.038 1034.83 426.45C1034.83 428.485 1034.11 430.105 1032.67 431.307C1031.26 432.487 1029.28 433.077 1026.74 433.077H1015.39V408.718H1026.36C1028.83 408.718 1030.77 409.285 1032.15 410.419C1033.56 411.552 1034.27 413.09 1034.27 415.034C1034.27 416.468 1033.89 417.659 1033.12 418.608C1032.38 419.556 1031.39 420.215 1030.14 420.585ZM1021.33 418.573H1025.21C1026.18 418.573 1026.93 418.365 1027.43 417.948C1027.97 417.509 1028.23 416.873 1028.23 416.04C1028.23 415.207 1027.97 414.571 1027.43 414.131C1026.93 413.692 1026.18 413.472 1025.21 413.472H1021.33V418.573ZM1025.7 428.289C1026.69 428.289 1027.46 428.069 1027.99 427.629C1028.54 427.167 1028.82 426.507 1028.82 425.652C1028.82 424.796 1028.53 424.125 1027.95 423.639C1027.4 423.153 1026.62 422.91 1025.63 422.91H1021.33V428.289H1025.7ZM1057.39 413.715V433.077H1051.45V430.44C1050.85 431.296 1050.03 431.99 1048.99 432.522C1047.97 433.031 1046.84 433.285 1045.59 433.285C1044.11 433.285 1042.8 432.961 1041.67 432.314C1040.53 431.643 1039.65 430.683 1039.03 429.434C1038.41 428.185 1038.09 426.716 1038.09 425.027V413.715H1043.99V424.229C1043.99 425.524 1044.33 426.531 1045 427.248C1045.67 427.965 1046.57 428.323 1047.7 428.323C1048.86 428.323 1049.78 427.965 1050.45 427.248C1051.12 426.531 1051.45 425.524 1051.45 424.229V413.715H1057.39ZM1072.44 428.046V433.077H1069.42C1067.27 433.077 1065.59 432.557 1064.39 431.516C1063.19 430.452 1062.58 428.728 1062.58 426.346V418.642H1060.23V413.715H1062.58V408.996H1068.52V413.715H1072.4V418.642H1068.52V426.415C1068.52 426.993 1068.66 427.41 1068.93 427.664C1069.21 427.919 1069.67 428.046 1070.32 428.046H1072.44ZM1086.54 428.046V433.077H1083.52C1081.37 433.077 1079.69 432.557 1078.49 431.516C1077.28 430.452 1076.68 428.728 1076.68 426.346V418.642H1074.32V413.715H1076.68V408.996H1082.61V413.715H1086.5V418.642H1082.61V426.415C1082.61 426.993 1082.75 427.41 1083.03 427.664C1083.31 427.919 1083.77 428.046 1084.42 428.046H1086.54ZM1098.65 433.355C1096.76 433.355 1095.05 432.95 1093.52 432.14C1092.02 431.331 1090.82 430.174 1089.95 428.67C1089.09 427.167 1088.66 425.409 1088.66 423.396C1088.66 421.407 1089.1 419.66 1089.98 418.156C1090.86 416.63 1092.06 415.462 1093.59 414.652C1095.12 413.842 1096.83 413.437 1098.72 413.437C1100.62 413.437 1102.33 413.842 1103.86 414.652C1105.39 415.462 1106.59 416.63 1107.47 418.156C1108.35 419.66 1108.79 421.407 1108.79 423.396C1108.79 425.385 1108.34 427.144 1107.43 428.67C1106.55 430.174 1105.34 431.331 1103.79 432.14C1102.26 432.95 1100.55 433.355 1098.65 433.355ZM1098.65 428.219C1099.79 428.219 1100.75 427.803 1101.53 426.97C1102.34 426.137 1102.75 424.946 1102.75 423.396C1102.75 421.846 1102.36 420.655 1101.57 419.822C1100.81 418.989 1099.86 418.573 1098.72 418.573C1097.57 418.573 1096.61 418.989 1095.84 419.822C1095.08 420.632 1094.7 421.823 1094.7 423.396C1094.7 424.946 1095.07 426.137 1095.81 426.97C1096.57 427.803 1097.52 428.219 1098.65 428.219ZM1123.73 413.507C1126 413.507 1127.8 414.247 1129.15 415.728C1130.51 417.185 1131.19 419.197 1131.19 421.765V433.077H1125.29V422.563C1125.29 421.268 1124.96 420.262 1124.29 419.544C1123.62 418.827 1122.71 418.469 1121.58 418.469C1120.45 418.469 1119.55 418.827 1118.87 419.544C1118.2 420.262 1117.87 421.268 1117.87 422.563V433.077H1111.93V413.715H1117.87V416.283C1118.47 415.427 1119.28 414.756 1120.3 414.27C1121.31 413.761 1122.46 413.507 1123.73 413.507Z"
          fill="illustrationInterface010"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M252 323C251.061 323 250.152 323.107 249.283 323.308C247.13 323.806 244.982 322.464 244.484 320.312C243.987 318.159 245.328 316.011 247.481 315.514C248.937 315.177 250.45 315 252 315H256.536C258.745 315 260.536 316.791 260.536 319C260.536 321.209 258.745 323 256.536 323H252ZM274.714 319C274.714 316.791 276.505 315 278.714 315H287.786C289.995 315 291.786 316.791 291.786 319C291.786 321.209 289.995 323 287.786 323H278.714C276.505 323 274.714 321.209 274.714 319ZM305.964 319C305.964 316.791 307.755 315 309.964 315H319.036C321.245 315 323.036 316.791 323.036 319C323.036 321.209 321.245 323 319.036 323H309.964C307.755 323 305.964 321.209 305.964 319ZM337.214 319C337.214 316.791 339.005 315 341.214 315H350.286C352.495 315 354.286 316.791 354.286 319C354.286 321.209 352.495 323 350.286 323H341.214C339.005 323 337.214 321.209 337.214 319ZM368.464 319C368.464 316.791 370.255 315 372.464 315H381.536C383.745 315 385.536 316.791 385.536 319C385.536 321.209 383.745 323 381.536 323H372.464C370.255 323 368.464 321.209 368.464 319ZM399.714 319C399.714 316.791 401.505 315 403.714 315H412.786C414.995 315 416.786 316.791 416.786 319C416.786 321.209 414.995 323 412.786 323H403.714C401.505 323 399.714 321.209 399.714 319ZM430.964 319C430.964 316.791 432.755 315 434.964 315H444.036C446.245 315 448.036 316.791 448.036 319C448.036 321.209 446.245 323 444.036 323H434.964C432.755 323 430.964 321.209 430.964 319ZM462.214 319C462.214 316.791 464.005 315 466.214 315H475.286C477.495 315 479.286 316.791 479.286 319C479.286 321.209 477.495 323 475.286 323H466.214C464.005 323 462.214 321.209 462.214 319ZM493.464 319C493.464 316.791 495.255 315 497.464 315H506.536C508.745 315 510.536 316.791 510.536 319C510.536 321.209 508.745 323 506.536 323H497.464C495.255 323 493.464 321.209 493.464 319ZM524.714 319C524.714 316.791 526.505 315 528.714 315H537.786C539.995 315 541.786 316.791 541.786 319C541.786 321.209 539.995 323 537.786 323H528.714C526.505 323 524.714 321.209 524.714 319ZM555.964 319C555.964 316.791 557.755 315 559.964 315H569.036C571.245 315 573.036 316.791 573.036 319C573.036 321.209 571.245 323 569.036 323H559.964C557.755 323 555.964 321.209 555.964 319ZM587.214 319C587.214 316.791 589.005 315 591.214 315H600.286C602.495 315 604.286 316.791 604.286 319C604.286 321.209 602.495 323 600.286 323H591.214C589.005 323 587.214 321.209 587.214 319ZM618.464 319C618.464 316.791 620.255 315 622.464 315H631.536C633.745 315 635.536 316.791 635.536 319C635.536 321.209 633.745 323 631.536 323H622.464C620.255 323 618.464 321.209 618.464 319ZM649.714 319C649.714 316.791 651.505 315 653.714 315H662.786C664.995 315 666.786 316.791 666.786 319C666.786 321.209 664.995 323 662.786 323H653.714C651.505 323 649.714 321.209 649.714 319ZM680.964 319C680.964 316.791 682.755 315 684.964 315H694.036C696.245 315 698.036 316.791 698.036 319C698.036 321.209 696.245 323 694.036 323H684.964C682.755 323 680.964 321.209 680.964 319ZM712.214 319C712.214 316.791 714.005 315 716.214 315H725.286C727.495 315 729.286 316.791 729.286 319C729.286 321.209 727.495 323 725.286 323H716.214C714.005 323 712.214 321.209 712.214 319ZM743.464 319C743.464 316.791 745.255 315 747.464 315H756.536C758.745 315 760.536 316.791 760.536 319C760.536 321.209 758.745 323 756.536 323H747.464C745.255 323 743.464 321.209 743.464 319ZM774.714 319C774.714 316.791 776.505 315 778.714 315H787.786C789.995 315 791.786 316.791 791.786 319C791.786 321.209 789.995 323 787.786 323H778.714C776.505 323 774.714 321.209 774.714 319ZM805.964 319C805.964 316.791 807.755 315 809.964 315H819.036C821.245 315 823.036 316.791 823.036 319C823.036 321.209 821.245 323 819.036 323H809.964C807.755 323 805.964 321.209 805.964 319ZM837.214 319C837.214 316.791 839.005 315 841.214 315H850.286C852.495 315 854.286 316.791 854.286 319C854.286 321.209 852.495 323 850.286 323H841.214C839.005 323 837.214 321.209 837.214 319ZM868.464 319C868.464 316.791 870.255 315 872.464 315H877C878.55 315 880.063 315.177 881.519 315.514C883.672 316.011 885.013 318.159 884.516 320.312C884.018 322.464 881.87 323.806 879.717 323.308C878.848 323.107 877.939 323 877 323H872.464C870.255 323 868.464 321.209 868.464 319ZM891.688 327.484C893.841 326.987 895.989 328.328 896.486 330.481C896.823 331.937 897 333.45 897 335V339.906C897 342.116 895.209 343.906 893 343.906C890.791 343.906 889 342.116 889 339.906V335C889 334.061 888.893 333.152 888.692 332.283C888.194 330.13 889.536 327.982 891.688 327.484ZM237.312 327.484C239.464 327.982 240.806 330.13 240.308 332.283C240.107 333.152 240 334.061 240 335V339.906C240 342.116 238.209 343.906 236 343.906C233.791 343.906 232 342.116 232 339.906V335C232 333.45 232.177 331.937 232.514 330.481C233.011 328.328 235.159 326.987 237.312 327.484ZM893 359.894C895.209 359.894 897 361.684 897 363.894V373.706C897 375.916 895.209 377.706 893 377.706C890.791 377.706 889 375.916 889 373.706V363.894C889 361.684 890.791 359.894 893 359.894ZM236 359.894C238.209 359.894 240 361.684 240 363.894V373.706C240 375.916 238.209 377.706 236 377.706C233.791 377.706 232 375.916 232 373.706V363.894C232 361.684 233.791 359.894 236 359.894ZM236 393.694C238.209 393.694 240 395.484 240 397.694V407.506C240 409.716 238.209 411.506 236 411.506C233.791 411.506 232 409.716 232 407.506V397.694C232 395.484 233.791 393.694 236 393.694ZM893 393.694C895.209 393.694 897 395.484 897 397.694V407.506C897 409.716 895.209 411.506 893 411.506C890.791 411.506 889 409.716 889 407.506V397.694C889 395.484 890.791 393.694 893 393.694ZM236 427.494C238.209 427.494 240 429.284 240 431.494V441.306C240 443.516 238.209 445.306 236 445.306C233.791 445.306 232 443.516 232 441.306V431.494C232 429.284 233.791 427.494 236 427.494ZM893 427.494C895.209 427.494 897 429.284 897 431.494V441.306C897 443.516 895.209 445.306 893 445.306C890.791 445.306 889 443.516 889 441.306V431.494C889 429.284 890.791 427.494 893 427.494ZM236 461.294C238.209 461.294 240 463.084 240 465.294V475.106C240 477.316 238.209 479.106 236 479.106C233.791 479.106 232 477.316 232 475.106V465.294C232 463.084 233.791 461.294 236 461.294ZM893 461.294C895.209 461.294 897 463.084 897 465.294V475.106C897 477.316 895.209 479.106 893 479.106C890.791 479.106 889 477.316 889 475.106V465.294C889 463.084 890.791 461.294 893 461.294ZM893 495.094C895.209 495.094 897 496.884 897 499.094V504C897 505.55 896.823 507.063 896.486 508.519C895.989 510.672 893.841 512.013 891.688 511.516C889.536 511.018 888.194 508.87 888.692 506.717C888.893 505.848 889 504.939 889 504V499.094C889 496.884 890.791 495.094 893 495.094ZM236 495.094C238.209 495.094 240 496.884 240 499.094V504C240 504.939 240.107 505.848 240.308 506.717C240.806 508.87 239.464 511.018 237.312 511.516C235.159 512.013 233.011 510.672 232.514 508.519C232.177 507.063 232 505.55 232 504V499.094C232 496.884 233.791 495.094 236 495.094ZM244.484 518.688C244.982 516.536 247.13 515.194 249.283 515.692C250.152 515.893 251.061 516 252 516H256.536C258.745 516 260.536 517.791 260.536 520C260.536 522.209 258.745 524 256.536 524H252C250.45 524 248.937 523.823 247.481 523.486C245.328 522.989 243.987 520.841 244.484 518.688ZM884.516 518.688C885.013 520.841 883.672 522.989 881.519 523.486C880.063 523.823 878.55 524 877 524H872.464C870.255 524 868.464 522.209 868.464 520C868.464 517.791 870.255 516 872.464 516H877C877.939 516 878.848 515.893 879.717 515.692C881.87 515.194 884.018 516.536 884.516 518.688ZM274.714 520C274.714 517.791 276.505 516 278.714 516H287.786C289.995 516 291.786 517.791 291.786 520C291.786 522.209 289.995 524 287.786 524H278.714C276.505 524 274.714 522.209 274.714 520ZM305.964 520C305.964 517.791 307.755 516 309.964 516H319.036C321.245 516 323.036 517.791 323.036 520C323.036 522.209 321.245 524 319.036 524H309.964C307.755 524 305.964 522.209 305.964 520ZM337.214 520C337.214 517.791 339.005 516 341.214 516H350.286C352.495 516 354.286 517.791 354.286 520C354.286 522.209 352.495 524 350.286 524H341.214C339.005 524 337.214 522.209 337.214 520ZM368.464 520C368.464 517.791 370.255 516 372.464 516H381.536C383.745 516 385.536 517.791 385.536 520C385.536 522.209 383.745 524 381.536 524H372.464C370.255 524 368.464 522.209 368.464 520ZM399.714 520C399.714 517.791 401.505 516 403.714 516H412.786C414.995 516 416.786 517.791 416.786 520C416.786 522.209 414.995 524 412.786 524H403.714C401.505 524 399.714 522.209 399.714 520ZM430.964 520C430.964 517.791 432.755 516 434.964 516H444.036C446.245 516 448.036 517.791 448.036 520C448.036 522.209 446.245 524 444.036 524H434.964C432.755 524 430.964 522.209 430.964 520ZM462.214 520C462.214 517.791 464.005 516 466.214 516H475.286C477.495 516 479.286 517.791 479.286 520C479.286 522.209 477.495 524 475.286 524H466.214C464.005 524 462.214 522.209 462.214 520ZM493.464 520C493.464 517.791 495.255 516 497.464 516H506.536C508.745 516 510.536 517.791 510.536 520C510.536 522.209 508.745 524 506.536 524H497.464C495.255 524 493.464 522.209 493.464 520ZM524.714 520C524.714 517.791 526.505 516 528.714 516H537.786C539.995 516 541.786 517.791 541.786 520C541.786 522.209 539.995 524 537.786 524H528.714C526.505 524 524.714 522.209 524.714 520ZM555.964 520C555.964 517.791 557.755 516 559.964 516H569.036C571.245 516 573.036 517.791 573.036 520C573.036 522.209 571.245 524 569.036 524H559.964C557.755 524 555.964 522.209 555.964 520ZM587.214 520C587.214 517.791 589.005 516 591.214 516H600.286C602.495 516 604.286 517.791 604.286 520C604.286 522.209 602.495 524 600.286 524H591.214C589.005 524 587.214 522.209 587.214 520ZM618.464 520C618.464 517.791 620.255 516 622.464 516H631.536C633.745 516 635.536 517.791 635.536 520C635.536 522.209 633.745 524 631.536 524H622.464C620.255 524 618.464 522.209 618.464 520ZM649.714 520C649.714 517.791 651.505 516 653.714 516H662.786C664.995 516 666.786 517.791 666.786 520C666.786 522.209 664.995 524 662.786 524H653.714C651.505 524 649.714 522.209 649.714 520ZM680.964 520C680.964 517.791 682.755 516 684.964 516H694.036C696.245 516 698.036 517.791 698.036 520C698.036 522.209 696.245 524 694.036 524H684.964C682.755 524 680.964 522.209 680.964 520ZM712.214 520C712.214 517.791 714.005 516 716.214 516H725.286C727.495 516 729.286 517.791 729.286 520C729.286 522.209 727.495 524 725.286 524H716.214C714.005 524 712.214 522.209 712.214 520ZM743.464 520C743.464 517.791 745.255 516 747.464 516H756.536C758.745 516 760.536 517.791 760.536 520C760.536 522.209 758.745 524 756.536 524H747.464C745.255 524 743.464 522.209 743.464 520ZM774.714 520C774.714 517.791 776.505 516 778.714 516H787.786C789.995 516 791.786 517.791 791.786 520C791.786 522.209 789.995 524 787.786 524H778.714C776.505 524 774.714 522.209 774.714 520ZM805.964 520C805.964 517.791 807.755 516 809.964 516H819.036C821.245 516 823.036 517.791 823.036 520C823.036 522.209 821.245 524 819.036 524H809.964C807.755 524 805.964 522.209 805.964 520ZM837.214 520C837.214 517.791 839.005 516 841.214 516H850.286C852.495 516 854.286 517.791 854.286 520C854.286 522.209 852.495 524 850.286 524H841.214C839.005 524 837.214 522.209 837.214 520Z"
          fill="illustrationHighlight010"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="186.434"
          y="279.217"
          width="1085.13"
          height="292.133"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="5.7832" />
          <feGaussianBlur stdDeviation="5.7832" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};
export default BannerBehavioursTextOverflowIllustration;