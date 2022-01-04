import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const CheckedDisabled: React.FC = () => {
  const filter0 = getSSRId();
  const filter1 = getSSRId();

  return (
    <Svg
      width="1000"
      height="1001"
      viewBox="0 0 1000 1001"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        y="0.34375"
        width="1000"
        height="1000"
        rx="22"
        fill="illustrationBackground020"
      />
      <Path
        d="M215 295C215 250.817 250.817 215 295 215H704.186C748.368 215 784.186 250.817 784.186 295V704.186C784.186 748.368 748.368 784.186 704.186 784.186H295C250.817 784.186 215 748.368 215 704.186V295Z"
        fill="darkBlue020"
      />
      <Path
        d="M428.375 598.363L329.511 499.5L295.845 532.928L428.375 665.458L712.875 380.958L679.446 347.529L428.375 598.363Z"
        fill="darkBlue040"
      />
      <g filter={`url(#${filter0})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M697 641.234L552 576L586.295 730L628.2 669.174L697 641.234Z"
          fill="black"
        />
        <Path
          d="M699.079 646.354L711.046 641.494L699.267 636.195L554.267 570.961L544.209 566.435L546.606 577.201L580.901 731.201L583.656 743.571L590.845 733.135L631.812 673.672L699.079 646.354Z"
          stroke="white"
          stroke-width="11.0518"
        />
      </g>
      <g filter={`url(#${filter1})`}>
        <mask
          id="path-6-outside-1_526_32767"
          maskUnits="userSpaceOnUse"
          x="605.504"
          y="671.011"
          width="251"
          height="251"
          fill="black"
        >
          <Rect fill="white" x="605.504" y="671.011" width="251" height="251" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M780.32 865.889C766.405 875.798 749.382 881.625 730.999 881.625C683.988 881.625 645.878 843.515 645.878 796.504C645.878 778.121 651.705 761.098 661.614 747.183L780.32 865.889ZM800.383 845.827C810.292 831.912 816.12 814.89 816.12 796.506C816.12 749.495 778.01 711.385 730.999 711.385C712.615 711.385 695.592 717.213 681.678 727.122L800.383 845.827ZM730.999 910C793.68 910 844.493 859.187 844.493 796.505C844.493 733.824 793.68 683.011 730.999 683.011C668.317 683.011 617.504 733.824 617.504 796.505C617.504 859.187 668.317 910 730.999 910Z"
          />
        </mask>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M780.32 865.889C766.405 875.798 749.382 881.625 730.999 881.625C683.988 881.625 645.878 843.515 645.878 796.504C645.878 778.121 651.705 761.098 661.614 747.183L780.32 865.889ZM800.383 845.827C810.292 831.912 816.12 814.89 816.12 796.506C816.12 749.495 778.01 711.385 730.999 711.385C712.615 711.385 695.592 717.213 681.678 727.122L800.383 845.827ZM730.999 910C793.68 910 844.493 859.187 844.493 796.505C844.493 733.824 793.68 683.011 730.999 683.011C668.317 683.011 617.504 733.824 617.504 796.505C617.504 859.187 668.317 910 730.999 910Z"
          fill="black"
        />
        <Path
          d="M661.614 747.183L669.429 739.369L660.191 730.13L652.612 740.773L661.614 747.183ZM800.383 845.827L792.568 853.642L801.807 862.88L809.385 852.238L800.383 845.827ZM681.678 727.122L675.267 718.119L664.624 725.698L673.863 734.936L681.678 727.122ZM773.909 856.886C761.804 865.506 747.01 870.574 730.999 870.574V892.677C751.755 892.677 771.006 886.089 786.73 874.891L773.909 856.886ZM730.999 870.574C690.091 870.574 656.929 837.412 656.929 796.504H634.826C634.826 849.619 677.884 892.677 730.999 892.677V870.574ZM656.929 796.504C656.929 780.493 661.997 765.699 670.617 753.594L652.612 740.773C641.414 756.497 634.826 775.748 634.826 796.504H656.929ZM653.8 754.998L772.505 873.703L788.134 858.074L669.429 739.369L653.8 754.998ZM809.385 852.238C820.583 836.513 827.171 817.262 827.171 796.506H805.068C805.068 812.517 800 827.311 791.38 839.416L809.385 852.238ZM827.171 796.506C827.171 743.391 784.113 700.333 730.999 700.333V722.437C771.906 722.437 805.068 755.599 805.068 796.506H827.171ZM730.999 700.333C710.242 700.333 690.992 706.921 675.267 718.119L688.088 736.124C700.193 727.504 714.988 722.437 730.999 722.437V700.333ZM673.863 734.936L792.568 853.642L808.198 838.012L689.492 719.307L673.863 734.936ZM730.999 921.052C799.784 921.052 855.545 865.29 855.545 796.505H833.441C833.441 853.083 787.576 898.948 730.999 898.948V921.052ZM855.545 796.505C855.545 727.72 799.784 671.959 730.999 671.959V694.062C787.576 694.062 833.441 739.928 833.441 796.505H855.545ZM730.999 671.959C662.213 671.959 606.452 727.72 606.452 796.505H628.556C628.556 739.928 674.421 694.062 730.999 694.062V671.959ZM606.452 796.505C606.452 865.29 662.213 921.052 730.999 921.052V898.948C674.421 898.948 628.556 853.083 628.556 796.505H606.452Z"
          fill="white"
          mask="url(#path-6-outside-1_526_32767)"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="503.262"
          y="534.768"
          width="254.985"
          height="266.581"
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
          <feOffset dy="11.0518" />
          <feGaussianBlur stdDeviation="16.5776" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_526_32767"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_526_32767"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="573.297"
          y="649.855"
          width="315.403"
          height="315.403"
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
          <feOffset dy="11.0518" />
          <feGaussianBlur stdDeviation="16.5776" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_526_32767"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_526_32767"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default CheckedDisabled;