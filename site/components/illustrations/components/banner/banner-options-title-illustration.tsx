import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const BannerOptionsTitleIllustration: React.FC = () => {
  const clip0 = getSSRId();
  const clip1 = getSSRId();

  const filter0 = getSSRId();

  return (
    <Svg
      width="1491"
      height="839"
      viewBox="0 0 1491 839"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <Path
          d="M0 4.00001C0 1.79087 1.79086 0 4 0H1486.72C1488.93 0 1490.72 1.79086 1490.72 4V834.004C1490.72 836.213 1488.93 838.004 1486.72 838.004H4.00002C1.79088 838.004 0 836.213 0 834.004V4.00001Z"
          fill="illustrationBackground010"
        />
        <g filter={`url(#${filter0})`}>
          <g clipPath="url(#clip1)">
            <Path
              d="M301 295C301 281.745 311.745 271 325 271H1491V567H325C311.745 567 301 556.255 301 543V295Z"
              fill="illustrationInterface010"
            />
            <Rect
              x="574"
              y="465"
              width="991"
              height="28"
              rx="14"
              fill="illustrationInterface020"
            />
            <Path
              d="M443 341.5C408.5 341.5 380.5 369.5 380.5 404C380.5 438.5 408.5 466.5 443 466.5C477.5 466.5 505.5 438.5 505.5 404C505.5 369.5 477.5 341.5 443 341.5Z"
              fill="illustrationInterface020"
            />
            <Path
              d="M614.824 362.456V372.32H601.432V413H589.12V372.32H575.728V362.456H614.824ZM627.195 368.648C625.035 368.648 623.259 368.024 621.867 366.776C620.523 365.48 619.851 363.896 619.851 362.024C619.851 360.104 620.523 358.52 621.867 357.272C623.259 355.976 625.035 355.328 627.195 355.328C629.307 355.328 631.035 355.976 632.379 357.272C633.771 358.52 634.467 360.104 634.467 362.024C634.467 363.896 633.771 365.48 632.379 366.776C631.035 368.024 629.307 368.648 627.195 368.648ZM633.315 372.824V413H621.003V372.824H633.315ZM664.629 402.56V413H658.365C653.901 413 650.421 411.92 647.925 409.76C645.429 407.552 644.181 403.976 644.181 399.032V383.048H639.285V372.824H644.181V363.032H656.493V372.824H664.557V383.048H656.493V399.176C656.493 400.376 656.781 401.24 657.357 401.768C657.933 402.296 658.893 402.56 660.237 402.56H664.629ZM683.799 359.72V413H671.487V359.72H683.799ZM730.594 392.264C730.594 393.416 730.522 394.616 730.378 395.864H702.514C702.706 398.36 703.498 400.28 704.89 401.624C706.33 402.92 708.082 403.568 710.146 403.568C713.218 403.568 715.354 402.272 716.554 399.68H729.658C728.986 402.32 727.762 404.696 725.986 406.808C724.258 408.92 722.074 410.576 719.434 411.776C716.794 412.976 713.842 413.576 710.578 413.576C706.642 413.576 703.138 412.736 700.066 411.056C696.994 409.376 694.594 406.976 692.866 403.856C691.138 400.736 690.274 397.088 690.274 392.912C690.274 388.736 691.114 385.088 692.794 381.968C694.522 378.848 696.922 376.448 699.994 374.768C703.066 373.088 706.594 372.248 710.578 372.248C714.466 372.248 717.922 373.064 720.946 374.696C723.97 376.328 726.322 378.656 728.002 381.68C729.73 384.704 730.594 388.232 730.594 392.264ZM717.994 389.024C717.994 386.912 717.274 385.232 715.834 383.984C714.394 382.736 712.594 382.112 710.434 382.112C708.37 382.112 706.618 382.712 705.178 383.912C703.786 385.112 702.922 386.816 702.586 389.024H717.994ZM767.611 372.248C770.443 372.248 772.915 372.824 775.027 373.976C777.187 375.128 778.843 376.64 779.995 378.512V372.824H792.307V412.928C792.307 416.624 791.563 419.96 790.075 422.936C788.635 425.96 786.403 428.36 783.379 430.136C780.403 431.912 776.683 432.8 772.219 432.8C766.267 432.8 761.443 431.384 757.747 428.552C754.051 425.768 751.939 421.976 751.411 417.176H763.579C763.963 418.712 764.875 419.912 766.315 420.776C767.755 421.688 769.531 422.144 771.643 422.144C774.187 422.144 776.203 421.4 777.691 419.912C779.227 418.472 779.995 416.144 779.995 412.928V407.24C778.795 409.112 777.139 410.648 775.027 411.848C772.915 413 770.443 413.576 767.611 413.576C764.299 413.576 761.299 412.736 758.611 411.056C755.923 409.328 753.787 406.904 752.203 403.784C750.667 400.616 749.899 396.968 749.899 392.84C749.899 388.712 750.667 385.088 752.203 381.968C753.787 378.848 755.923 376.448 758.611 374.768C761.299 373.088 764.299 372.248 767.611 372.248ZM779.995 392.912C779.995 389.84 779.131 387.416 777.403 385.64C775.723 383.864 773.659 382.976 771.211 382.976C768.763 382.976 766.675 383.864 764.947 385.64C763.267 387.368 762.427 389.768 762.427 392.84C762.427 395.912 763.267 398.36 764.947 400.184C766.675 401.96 768.763 402.848 771.211 402.848C773.659 402.848 775.723 401.96 777.403 400.184C779.131 398.408 779.995 395.984 779.995 392.912ZM819.502 413.576C815.566 413.576 812.014 412.736 808.846 411.056C805.726 409.376 803.254 406.976 801.43 403.856C799.654 400.736 798.766 397.088 798.766 392.912C798.766 388.784 799.678 385.16 801.502 382.04C803.326 378.872 805.822 376.448 808.99 374.768C812.158 373.088 815.71 372.248 819.646 372.248C823.582 372.248 827.134 373.088 830.302 374.768C833.47 376.448 835.966 378.872 837.79 382.04C839.614 385.16 840.526 388.784 840.526 392.912C840.526 397.04 839.59 400.688 837.718 403.856C835.894 406.976 833.374 409.376 830.158 411.056C826.99 412.736 823.438 413.576 819.502 413.576ZM819.502 402.92C821.854 402.92 823.846 402.056 825.478 400.328C827.158 398.6 827.998 396.128 827.998 392.912C827.998 389.696 827.182 387.224 825.55 385.496C823.966 383.768 821.998 382.904 819.646 382.904C817.246 382.904 815.254 383.768 813.67 385.496C812.086 387.176 811.294 389.648 811.294 392.912C811.294 396.128 812.062 398.6 813.598 400.328C815.182 402.056 817.15 402.92 819.502 402.92ZM884.93 392.264C884.93 393.416 884.858 394.616 884.714 395.864H856.85C857.042 398.36 857.834 400.28 859.226 401.624C860.666 402.92 862.418 403.568 864.482 403.568C867.554 403.568 869.69 402.272 870.89 399.68H883.994C883.322 402.32 882.098 404.696 880.322 406.808C878.594 408.92 876.41 410.576 873.77 411.776C871.13 412.976 868.178 413.576 864.914 413.576C860.978 413.576 857.474 412.736 854.402 411.056C851.33 409.376 848.93 406.976 847.202 403.856C845.474 400.736 844.61 397.088 844.61 392.912C844.61 388.736 845.45 385.088 847.13 381.968C848.858 378.848 851.258 376.448 854.33 374.768C857.402 373.088 860.93 372.248 864.914 372.248C868.802 372.248 872.258 373.064 875.282 374.696C878.306 376.328 880.658 378.656 882.338 381.68C884.066 384.704 884.93 388.232 884.93 392.264ZM872.33 389.024C872.33 386.912 871.61 385.232 870.17 383.984C868.73 382.736 866.93 382.112 864.77 382.112C862.706 382.112 860.954 382.712 859.514 383.912C858.122 385.112 857.258 386.816 856.922 389.024H872.33ZM907.769 413.576C904.265 413.576 901.145 412.976 898.409 411.776C895.673 410.576 893.513 408.944 891.929 406.88C890.345 404.768 889.457 402.416 889.265 399.824H901.433C901.577 401.216 902.225 402.344 903.377 403.208C904.529 404.072 905.945 404.504 907.625 404.504C909.161 404.504 910.337 404.216 911.153 403.64C912.017 403.016 912.449 402.224 912.449 401.264C912.449 400.112 911.849 399.272 910.649 398.744C909.449 398.168 907.505 397.544 904.817 396.872C901.937 396.2 899.537 395.504 897.617 394.784C895.697 394.016 894.041 392.84 892.649 391.256C891.257 389.624 890.561 387.44 890.561 384.704C890.561 382.4 891.185 380.312 892.433 378.44C893.729 376.52 895.601 375.008 898.049 373.904C900.545 372.8 903.497 372.248 906.905 372.248C911.945 372.248 915.905 373.496 918.785 375.992C921.713 378.488 923.393 381.8 923.825 385.928H912.449C912.257 384.536 911.633 383.432 910.577 382.616C909.569 381.8 908.225 381.392 906.545 381.392C905.105 381.392 904.001 381.68 903.233 382.256C902.465 382.784 902.081 383.528 902.081 384.488C902.081 385.64 902.681 386.504 903.881 387.08C905.129 387.656 907.049 388.232 909.641 388.808C912.617 389.576 915.041 390.344 916.913 391.112C918.785 391.832 920.417 393.032 921.809 394.712C923.249 396.344 923.993 398.552 924.041 401.336C924.041 403.688 923.369 405.8 922.025 407.672C920.729 409.496 918.833 410.936 916.337 411.992C913.889 413.048 911.033 413.576 907.769 413.576ZM971.527 372.392C976.135 372.392 979.831 373.928 982.615 377C985.399 380.024 986.791 384.2 986.791 389.528V413H974.551V391.184C974.551 388.496 973.855 386.408 972.463 384.92C971.071 383.432 969.199 382.688 966.847 382.688C964.495 382.688 962.623 383.432 961.231 384.92C959.839 386.408 959.143 388.496 959.143 391.184V413H946.831V359.72H959.143V378.224C960.391 376.448 962.095 375.032 964.255 373.976C966.415 372.92 968.839 372.392 971.527 372.392ZM1033.22 392.264C1033.22 393.416 1033.15 394.616 1033 395.864H1005.14C1005.33 398.36 1006.12 400.28 1007.51 401.624C1008.95 402.92 1010.71 403.568 1012.77 403.568C1015.84 403.568 1017.98 402.272 1019.18 399.68H1032.28C1031.61 402.32 1030.39 404.696 1028.61 406.808C1026.88 408.92 1024.7 410.576 1022.06 411.776C1019.42 412.976 1016.47 413.576 1013.2 413.576C1009.27 413.576 1005.76 412.736 1002.69 411.056C999.619 409.376 997.219 406.976 995.491 403.856C993.763 400.736 992.899 397.088 992.899 392.912C992.899 388.736 993.739 385.088 995.419 381.968C997.147 378.848 999.547 376.448 1002.62 374.768C1005.69 373.088 1009.22 372.248 1013.2 372.248C1017.09 372.248 1020.55 373.064 1023.57 374.696C1026.59 376.328 1028.95 378.656 1030.63 381.68C1032.35 384.704 1033.22 388.232 1033.22 392.264ZM1020.62 389.024C1020.62 386.912 1019.9 385.232 1018.46 383.984C1017.02 382.736 1015.22 382.112 1013.06 382.112C1010.99 382.112 1009.24 382.712 1007.8 383.912C1006.41 385.112 1005.55 386.816 1005.21 389.024H1020.62ZM1052.03 379.52C1053.47 377.312 1055.27 375.584 1057.43 374.336C1059.59 373.04 1061.99 372.392 1064.63 372.392V385.424H1061.24C1058.17 385.424 1055.87 386.096 1054.33 387.44C1052.79 388.736 1052.03 391.04 1052.03 394.352V413H1039.71V372.824H1052.03V379.52ZM1108.38 392.264C1108.38 393.416 1108.31 394.616 1108.17 395.864H1080.3C1080.49 398.36 1081.29 400.28 1082.68 401.624C1084.12 402.92 1085.87 403.568 1087.93 403.568C1091.01 403.568 1093.14 402.272 1094.34 399.68H1107.45C1106.77 402.32 1105.55 404.696 1103.77 406.808C1102.05 408.92 1099.86 410.576 1097.22 411.776C1094.58 412.976 1091.63 413.576 1088.37 413.576C1084.43 413.576 1080.93 412.736 1077.85 411.056C1074.78 409.376 1072.38 406.976 1070.65 403.856C1068.93 400.736 1068.06 397.088 1068.06 392.912C1068.06 388.736 1068.9 385.088 1070.58 381.968C1072.31 378.848 1074.71 376.448 1077.78 374.768C1080.85 373.088 1084.38 372.248 1088.37 372.248C1092.25 372.248 1095.71 373.064 1098.73 374.696C1101.76 376.328 1104.11 378.656 1105.79 381.68C1107.52 384.704 1108.38 388.232 1108.38 392.264ZM1095.78 389.024C1095.78 386.912 1095.06 385.232 1093.62 383.984C1092.18 382.736 1090.38 382.112 1088.22 382.112C1086.16 382.112 1084.41 382.712 1082.97 383.912C1081.57 385.112 1080.71 386.816 1080.37 389.024H1095.78Z"
              fill="illustrationHighlight010"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="285"
          y="263"
          width="1222"
          height="328"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="8" />
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
        <clipPath id={clip0}>
          <Rect width="1490.72" height="838.004" fill="white" />
        </clipPath>
        <clipPath id={clip1}>
          <Path
            d="M301 295C301 281.745 311.745 271 325 271H1491V567H325C311.745 567 301 556.255 301 543V295Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};
export default BannerOptionsTitleIllustration;