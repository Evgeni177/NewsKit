import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const Hover: React.FC = () => {
  const mask0 = getSSRId();
  const mask1 = getSSRId();
  const mask2 = getSSRId();
  const clip0 = getSSRId();
  const filter0 = getSSRId();
  const filter1 = getSSRId();
  return (
    <Svg
      width="1490"
      height="839"
      viewBox="0 0 1490 839"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0 4.03321C0 1.82407 1.79086 0.0332031 4 0.0332031H1486.72C1488.93 0.0332031 1490.72 1.82406 1490.72 4.0332V834.037C1490.72 836.246 1488.93 838.037 1486.72 838.037H4.00002C1.79088 838.037 0 836.246 0 834.037V4.03321Z"
        fill="illustrationBackground020"
      />
      <g filter={`url(#${filter0})`}>
        <g clipPath={`url(#${clip0})`}>
          <g filter={`url(#${filter1})`}>
            <Path
              d="M425 186.029C425 181.611 428.582 178.029 433 178.029H1057.97C1062.39 178.029 1065.97 181.611 1065.97 186.029V651.229C1065.97 655.648 1062.39 659.229 1057.97 659.229H433C428.582 659.229 425 655.648 425 651.229V186.029Z"
              fill="illustrationInterface010"
            />
          </g>
          <mask
            id={mask0}
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="470"
            y="230"
            width="46"
            height="46"
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M477.633 245.701H485.151V238.183H477.633V245.701ZM488.911 268.257H496.43V260.739H488.911V268.257ZM485.152 268.257H477.633V260.739H485.152V268.257ZM477.633 256.979H485.152V249.461H477.633V256.979ZM496.43 256.979H488.911V249.461H496.43V256.979ZM500.189 238.183V245.701H507.708V238.183H500.189ZM496.43 245.701H488.911V238.183H496.43V245.701ZM500.189 256.979H507.708V249.461H500.189V256.979ZM507.708 268.257H500.189V260.739H507.708V268.257Z"
              fill="black"
            />
          </mask>
          <g mask={`url(#${mask0})`}>
            <Path
              d="M470.114 230.664H515.226V275.776H470.114V230.664Z"
              fill="illustrationSubtle010"
            />
          </g>
          <Path
            d="M553.151 243.34V264.332H548.94V250.679L543.316 264.332H540.128L534.474 250.679V264.332H530.264V243.34H535.046L541.722 258.949L548.399 243.34H553.151Z"
            fill="illustrationSubtle010"
          />
          <Path
            d="M572.802 255.641C572.802 256.242 572.762 256.784 572.681 257.265H560.501C560.601 258.468 561.022 259.41 561.764 260.092C562.506 260.774 563.418 261.114 564.501 261.114C566.065 261.114 567.178 260.443 567.839 259.099H572.381C571.9 260.703 570.977 262.027 569.614 263.069C568.25 264.092 566.576 264.603 564.591 264.603C562.987 264.603 561.544 264.252 560.261 263.551C558.997 262.829 558.005 261.816 557.283 260.513C556.581 259.21 556.231 257.706 556.231 256.002C556.231 254.277 556.581 252.764 557.283 251.461C557.985 250.157 558.967 249.155 560.231 248.453C561.494 247.751 562.947 247.4 564.591 247.4C566.175 247.4 567.589 247.741 568.832 248.423C570.095 249.105 571.067 250.077 571.749 251.34C572.451 252.583 572.802 254.017 572.802 255.641ZM568.441 254.438C568.421 253.355 568.03 252.493 567.268 251.851C566.506 251.19 565.574 250.859 564.471 250.859C563.428 250.859 562.546 251.18 561.824 251.821C561.123 252.443 560.692 253.315 560.531 254.438H568.441Z"
            fill="illustrationSubtle010"
          />
          <Path
            d="M585.108 247.43C587.093 247.43 588.697 248.062 589.92 249.325C591.143 250.568 591.754 252.313 591.754 254.558V264.332H587.544V255.13C587.544 253.806 587.213 252.794 586.552 252.092C585.89 251.37 584.988 251.009 583.845 251.009C582.682 251.009 581.76 251.37 581.078 252.092C580.416 252.794 580.085 253.806 580.085 255.13V264.332H575.875V247.671H580.085V249.746C580.647 249.024 581.359 248.463 582.221 248.062C583.103 247.641 584.065 247.43 585.108 247.43Z"
            fill="illustrationSubtle010"
          />
          <Path
            d="M611.487 247.671V264.332H607.247V262.227C606.706 262.949 605.994 263.52 605.112 263.942C604.249 264.342 603.307 264.543 602.285 264.543C600.981 264.543 599.828 264.272 598.826 263.731C597.824 263.17 597.032 262.358 596.45 261.295C595.889 260.212 595.608 258.929 595.608 257.445V247.671H599.818V256.844C599.818 258.167 600.149 259.19 600.811 259.911C601.473 260.613 602.375 260.964 603.518 260.964C604.681 260.964 605.593 260.613 606.254 259.911C606.916 259.19 607.247 258.167 607.247 256.844V247.671H611.487Z"
            fill="illustrationSubtle010"
          />
          <Path
            d="M624.943 245.686C624.201 245.686 623.58 245.456 623.079 244.994C622.597 244.513 622.357 243.922 622.357 243.22C622.357 242.518 622.597 241.937 623.079 241.476C623.58 240.995 624.201 240.754 624.943 240.754C625.685 240.754 626.297 240.995 626.778 241.476C627.279 241.937 627.53 242.518 627.53 243.22C627.53 243.922 627.279 244.513 626.778 244.994C626.297 245.456 625.685 245.686 624.943 245.686ZM627.018 247.671V264.332H622.808V247.671H627.018Z"
            fill="illustrationSubtle010"
          />
          <Path
            d="M636.081 251.13V259.19C636.081 259.751 636.211 260.162 636.472 260.423C636.752 260.663 637.213 260.784 637.855 260.784H639.81V264.332H637.163C633.614 264.332 631.84 262.608 631.84 259.16V251.13H629.855V247.671H631.84V243.551H636.081V247.671H639.81V251.13H636.081Z"
            fill="illustrationSubtle010"
          />
          <Path
            d="M658.327 255.641C658.327 256.242 658.287 256.784 658.206 257.265H646.026C646.126 258.468 646.547 259.41 647.289 260.092C648.031 260.774 648.943 261.114 650.026 261.114C651.59 261.114 652.703 260.443 653.364 259.099H657.906C657.424 260.703 656.502 262.027 655.139 263.069C653.775 264.092 652.101 264.603 650.116 264.603C648.512 264.603 647.069 264.252 645.786 263.551C644.522 262.829 643.53 261.816 642.808 260.513C642.106 259.21 641.756 257.706 641.756 256.002C641.756 254.277 642.106 252.764 642.808 251.461C643.51 250.157 644.492 249.155 645.755 248.453C647.019 247.751 648.472 247.4 650.116 247.4C651.7 247.4 653.114 247.741 654.357 248.423C655.62 249.105 656.592 250.077 657.274 251.34C657.976 252.583 658.327 254.017 658.327 255.641ZM653.966 254.438C653.946 253.355 653.555 252.493 652.793 251.851C652.031 251.19 651.099 250.859 649.996 250.859C648.953 250.859 648.071 251.18 647.349 251.821C646.648 252.443 646.217 253.315 646.056 254.438H653.966Z"
            fill="illustrationSubtle010"
          />
          <Path
            d="M682.091 247.43C684.136 247.43 685.781 248.062 687.024 249.325C688.287 250.568 688.918 252.313 688.918 254.558V264.332H684.708V255.13C684.708 253.826 684.377 252.834 683.715 252.152C683.054 251.45 682.151 251.1 681.009 251.1C679.866 251.1 678.954 251.45 678.272 252.152C677.61 252.834 677.279 253.826 677.279 255.13V264.332H673.069V255.13C673.069 253.826 672.738 252.834 672.076 252.152C671.415 251.45 670.513 251.1 669.37 251.1C668.207 251.1 667.285 251.45 666.603 252.152C665.941 252.834 665.61 253.826 665.61 255.13V264.332H661.4V247.671H665.61V249.686C666.152 248.984 666.843 248.433 667.686 248.032C668.548 247.631 669.49 247.43 670.513 247.43C671.816 247.43 672.979 247.711 674.001 248.273C675.024 248.814 675.816 249.596 676.377 250.618C676.919 249.656 677.7 248.884 678.723 248.303C679.766 247.721 680.888 247.43 682.091 247.43Z"
            fill="illustrationSubtle010"
          />
          <Rect
            width="633.448"
            height="150.374"
            transform="translate(425 343.444)"
            fill="illustrationInterface020"
          />
          <mask
            id={mask1}
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="470"
            y="396"
            width="46"
            height="46"
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M479.493 401.714H505.828C507.895 401.714 509.587 403.387 509.587 405.473V431.789C509.587 433.856 507.895 435.548 505.828 435.548H479.493C477.407 435.548 475.753 433.856 475.753 431.789L475.772 405.473C475.772 403.387 477.407 401.714 479.493 401.714ZM498.309 424.27H505.828V405.473H479.513V424.27H487.031C487.031 427.39 489.569 429.909 492.67 429.909C495.772 429.909 498.309 427.39 498.309 424.27Z"
              fill="black"
            />
          </mask>
          <g mask={`url(#${mask1})`}>
            <Path
              d="M470.114 396.075H515.226V441.187H470.114V396.075Z"
              fill="illustrationHighlight010"
            />
          </g>
          <Path
            d="M553.151 408.751V429.744H548.94V416.09L543.316 429.744H540.128L534.474 416.09V429.744H530.264V408.751H535.046L541.722 424.36L548.399 408.751H553.151Z"
            fill="illustrationHighlight010"
          />
          <Path
            d="M572.802 421.052C572.802 421.654 572.762 422.195 572.681 422.676H560.501C560.601 423.879 561.022 424.821 561.764 425.503C562.506 426.185 563.418 426.526 564.501 426.526C566.065 426.526 567.178 425.854 567.839 424.511H572.381C571.9 426.115 570.977 427.438 569.614 428.48C568.25 429.503 566.576 430.014 564.591 430.014C562.987 430.014 561.544 429.663 560.261 428.962C558.997 428.24 558.005 427.227 557.283 425.924C556.581 424.621 556.231 423.117 556.231 421.413C556.231 419.689 556.581 418.175 557.283 416.872C557.985 415.568 558.967 414.566 560.231 413.864C561.494 413.162 562.947 412.812 564.591 412.812C566.175 412.812 567.589 413.152 568.832 413.834C570.095 414.516 571.067 415.488 571.749 416.751C572.451 417.994 572.802 419.428 572.802 421.052ZM568.441 419.849C568.421 418.766 568.03 417.904 567.268 417.263C566.506 416.601 565.574 416.27 564.471 416.27C563.428 416.27 562.546 416.591 561.824 417.233C561.123 417.854 560.692 418.726 560.531 419.849H568.441Z"
            fill="illustrationHighlight010"
          />
          <Path
            d="M585.108 412.842C587.093 412.842 588.697 413.473 589.92 414.736C591.143 415.979 591.754 417.724 591.754 419.969V429.744H587.544V420.541C587.544 419.217 587.213 418.205 586.552 417.503C585.89 416.781 584.988 416.421 583.845 416.421C582.682 416.421 581.76 416.781 581.078 417.503C580.416 418.205 580.085 419.217 580.085 420.541V429.744H575.875V413.082H580.085V415.157C580.647 414.436 581.359 413.874 582.221 413.473C583.103 413.052 584.065 412.842 585.108 412.842Z"
            fill="illustrationHighlight010"
          />
          <Path
            d="M611.487 413.082V429.744H607.247V427.638C606.706 428.36 605.994 428.932 605.112 429.353C604.249 429.754 603.307 429.954 602.285 429.954C600.981 429.954 599.828 429.683 598.826 429.142C597.824 428.581 597.032 427.769 596.45 426.706C595.889 425.623 595.608 424.34 595.608 422.857V413.082H599.818V422.255C599.818 423.578 600.149 424.601 600.811 425.323C601.473 426.024 602.375 426.375 603.518 426.375C604.681 426.375 605.593 426.024 606.254 425.323C606.916 424.601 607.247 423.578 607.247 422.255V413.082H611.487Z"
            fill="illustrationHighlight010"
          />
          <Path
            d="M624.943 411.097C624.201 411.097 623.58 410.867 623.079 410.406C622.597 409.924 622.357 409.333 622.357 408.631C622.357 407.929 622.597 407.348 623.079 406.887C623.58 406.406 624.201 406.165 624.943 406.165C625.685 406.165 626.297 406.406 626.778 406.887C627.279 407.348 627.53 407.929 627.53 408.631C627.53 409.333 627.279 409.924 626.778 410.406C626.297 410.867 625.685 411.097 624.943 411.097ZM627.018 413.082V429.744H622.808V413.082H627.018Z"
            fill="illustrationHighlight010"
          />
          <Path
            d="M636.081 416.541V424.601C636.081 425.162 636.211 425.573 636.472 425.834C636.752 426.074 637.213 426.195 637.855 426.195H639.81V429.744H637.163C633.614 429.744 631.84 428.019 631.84 424.571V416.541H629.855V413.082H631.84V408.962H636.081V413.082H639.81V416.541H636.081Z"
            fill="illustrationHighlight010"
          />
          <Path
            d="M658.327 421.052C658.327 421.654 658.287 422.195 658.206 422.676H646.026C646.126 423.879 646.547 424.821 647.289 425.503C648.031 426.185 648.943 426.526 650.026 426.526C651.59 426.526 652.703 425.854 653.364 424.511H657.906C657.424 426.115 656.502 427.438 655.139 428.48C653.775 429.503 652.101 430.014 650.116 430.014C648.512 430.014 647.069 429.663 645.786 428.962C644.522 428.24 643.53 427.227 642.808 425.924C642.106 424.621 641.756 423.117 641.756 421.413C641.756 419.689 642.106 418.175 642.808 416.872C643.51 415.568 644.492 414.566 645.755 413.864C647.019 413.162 648.472 412.812 650.116 412.812C651.7 412.812 653.114 413.152 654.357 413.834C655.62 414.516 656.592 415.488 657.274 416.751C657.976 417.994 658.327 419.428 658.327 421.052ZM653.966 419.849C653.946 418.766 653.555 417.904 652.793 417.263C652.031 416.601 651.099 416.27 649.996 416.27C648.953 416.27 648.071 416.591 647.349 417.233C646.648 417.854 646.217 418.726 646.056 419.849H653.966Z"
            fill="illustrationHighlight010"
          />
          <Path
            d="M682.091 412.842C684.136 412.842 685.781 413.473 687.024 414.736C688.287 415.979 688.918 417.724 688.918 419.969V429.744H684.708V420.541C684.708 419.238 684.377 418.245 683.715 417.563C683.054 416.862 682.151 416.511 681.009 416.511C679.866 416.511 678.954 416.862 678.272 417.563C677.61 418.245 677.279 419.238 677.279 420.541V429.744H673.069V420.541C673.069 419.238 672.738 418.245 672.076 417.563C671.415 416.862 670.513 416.511 669.37 416.511C668.207 416.511 667.285 416.862 666.603 417.563C665.941 418.245 665.61 419.238 665.61 420.541V429.744H661.4V413.082H665.61V415.097C666.152 414.395 666.843 413.844 667.686 413.443C668.548 413.042 669.49 412.842 670.513 412.842C671.816 412.842 672.979 413.122 674.001 413.684C675.024 414.225 675.816 415.007 676.377 416.03C676.919 415.067 677.7 414.295 678.723 413.714C679.766 413.132 680.888 412.842 682.091 412.842Z"
            fill="illustrationHighlight010"
          />
          <Path
            d="M1058.45 493.817V343.444H1065.97V493.817H1058.45Z"
            fill="illustrationHighlight010"
          />
          <mask
            id={mask2}
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="470"
            y="561"
            width="46"
            height="46"
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M473.876 584.042C473.876 573.666 482.297 565.245 492.673 565.245C503.048 565.245 511.469 573.666 511.469 584.042C511.469 594.418 503.048 602.838 492.673 602.838C482.297 602.838 473.876 594.418 473.876 584.042ZM490.793 595.32V591.561H494.552V595.32H490.793ZM492.672 599.079C484.383 599.079 477.635 592.331 477.635 584.042C477.635 575.753 484.383 569.005 492.672 569.005C500.962 569.005 507.71 575.753 507.71 584.042C507.71 592.331 500.962 599.079 492.672 599.079ZM485.154 580.283C485.154 576.128 488.518 572.764 492.672 572.764C496.826 572.764 500.191 576.128 500.191 580.283C500.191 582.694 498.706 583.992 497.26 585.255C495.888 586.454 494.552 587.622 494.552 589.681H490.793C490.793 586.257 492.563 584.9 494.12 583.707C495.342 582.77 496.432 581.935 496.432 580.283C496.432 578.215 494.74 576.523 492.672 576.523C490.605 576.523 488.913 578.215 488.913 580.283H485.154Z"
              fill="black"
            />
          </mask>
          <g mask={`url(#${mask2})`}>
            <Path
              d="M470.116 561.485H515.228V606.597H470.116V561.485Z"
              fill="illustrationSubtle010"
            />
          </g>
          <Path
            d="M553.152 574.162V595.154H548.942V581.5L543.318 595.154H540.13L534.476 581.5V595.154H530.266V574.162H535.048L541.724 589.77L548.401 574.162H553.152Z"
            fill="illustrationSubtle010"
          />
          <Path
            d="M572.804 586.462C572.804 587.064 572.764 587.605 572.683 588.086H560.503C560.603 589.289 561.024 590.232 561.766 590.913C562.508 591.595 563.42 591.936 564.503 591.936C566.067 591.936 567.18 591.264 567.841 589.921H572.383C571.901 591.525 570.979 592.848 569.616 593.891C568.252 594.913 566.578 595.424 564.593 595.424C562.989 595.424 561.546 595.074 560.263 594.372C558.999 593.65 558.007 592.638 557.285 591.334C556.583 590.031 556.233 588.527 556.233 586.823C556.233 585.099 556.583 583.585 557.285 582.282C557.987 580.979 558.969 579.976 560.232 579.274C561.496 578.573 562.949 578.222 564.593 578.222C566.177 578.222 567.591 578.563 568.834 579.244C570.097 579.926 571.069 580.898 571.751 582.161C572.453 583.405 572.804 584.838 572.804 586.462ZM568.443 585.259C568.423 584.176 568.032 583.314 567.27 582.673C566.508 582.011 565.576 581.68 564.473 581.68C563.43 581.68 562.548 582.001 561.826 582.643C561.125 583.264 560.694 584.136 560.533 585.259H568.443Z"
            fill="illustrationSubtle010"
          />
          <Path
            d="M585.11 578.252C587.095 578.252 588.699 578.883 589.922 580.146C591.145 581.39 591.756 583.134 591.756 585.379V595.154H587.546V585.951C587.546 584.628 587.215 583.615 586.553 582.913C585.892 582.192 584.99 581.831 583.847 581.831C582.684 581.831 581.762 582.192 581.08 582.913C580.418 583.615 580.087 584.628 580.087 585.951V595.154H575.877V578.492H580.087V580.568C580.649 579.846 581.361 579.284 582.223 578.883C583.105 578.462 584.067 578.252 585.11 578.252Z"
            fill="illustrationSubtle010"
          />
          <Path
            d="M611.489 578.492V595.154H607.249V593.049C606.708 593.77 605.996 594.342 605.114 594.763C604.251 595.164 603.309 595.364 602.287 595.364C600.983 595.364 599.83 595.094 598.828 594.552C597.825 593.991 597.034 593.179 596.452 592.116C595.891 591.034 595.61 589.75 595.61 588.267V578.492H599.82V587.665C599.82 588.988 600.151 590.011 600.813 590.733C601.475 591.435 602.377 591.785 603.52 591.785C604.683 591.785 605.595 591.435 606.256 590.733C606.918 590.011 607.249 588.988 607.249 587.665V578.492H611.489Z"
            fill="illustrationSubtle010"
          />
          <Path
            d="M624.945 576.507C624.203 576.507 623.582 576.277 623.081 575.816C622.599 575.335 622.359 574.743 622.359 574.041C622.359 573.34 622.599 572.758 623.081 572.297C623.582 571.816 624.203 571.575 624.945 571.575C625.687 571.575 626.299 571.816 626.78 572.297C627.281 572.758 627.532 573.34 627.532 574.041C627.532 574.743 627.281 575.335 626.78 575.816C626.299 576.277 625.687 576.507 624.945 576.507ZM627.02 578.492V595.154H622.81V578.492H627.02Z"
            fill="illustrationSubtle010"
          />
          <Path
            d="M636.083 581.951V590.011C636.083 590.572 636.213 590.983 636.473 591.244C636.754 591.485 637.215 591.605 637.857 591.605H639.812V595.154H637.165C633.616 595.154 631.842 593.429 631.842 589.981V581.951H629.857V578.492H631.842V574.372H636.083V578.492H639.812V581.951H636.083Z"
            fill="illustrationSubtle010"
          />
          <Path
            d="M658.329 586.462C658.329 587.064 658.289 587.605 658.208 588.086H646.028C646.128 589.289 646.549 590.232 647.291 590.913C648.033 591.595 648.945 591.936 650.028 591.936C651.592 591.936 652.705 591.264 653.366 589.921H657.908C657.426 591.525 656.504 592.848 655.141 593.891C653.777 594.913 652.103 595.424 650.118 595.424C648.514 595.424 647.071 595.074 645.787 594.372C644.524 593.65 643.532 592.638 642.81 591.334C642.108 590.031 641.757 588.527 641.757 586.823C641.757 585.099 642.108 583.585 642.81 582.282C643.512 580.979 644.494 579.976 645.757 579.274C647.021 578.573 648.474 578.222 650.118 578.222C651.702 578.222 653.116 578.563 654.359 579.244C655.622 579.926 656.594 580.898 657.276 582.161C657.978 583.405 658.329 584.838 658.329 586.462ZM653.968 585.259C653.948 584.176 653.557 583.314 652.795 582.673C652.033 582.011 651.101 581.68 649.998 581.68C648.955 581.68 648.073 582.001 647.351 582.643C646.65 583.264 646.219 584.136 646.058 585.259H653.968Z"
            fill="illustrationSubtle010"
          />
          <Path
            d="M682.093 578.252C684.138 578.252 685.782 578.883 687.026 580.146C688.289 581.39 688.92 583.134 688.92 585.379V595.154H684.71V585.951C684.71 584.648 684.379 583.655 683.717 582.974C683.056 582.272 682.153 581.921 681.011 581.921C679.868 581.921 678.955 582.272 678.274 582.974C677.612 583.655 677.281 584.648 677.281 585.951V595.154H673.071V585.951C673.071 584.648 672.74 583.655 672.078 582.974C671.417 582.272 670.515 581.921 669.372 581.921C668.209 581.921 667.287 582.272 666.605 582.974C665.943 583.655 665.612 584.648 665.612 585.951V595.154H661.402V578.492H665.612V580.507C666.154 579.806 666.845 579.254 667.688 578.853C668.55 578.452 669.492 578.252 670.515 578.252C671.818 578.252 672.981 578.532 674.003 579.094C675.026 579.635 675.818 580.417 676.379 581.44C676.92 580.477 677.702 579.705 678.725 579.124C679.768 578.543 680.89 578.252 682.093 578.252Z"
            fill="illustrationSubtle010"
          />
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="409"
          y="170.033"
          width="672.967"
          height="513.195"
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
        <filter
          id={filter1}
          x="409"
          y="170.029"
          width="672.97"
          height="513.2"
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
          <Rect
            x="425"
            y="178.033"
            width="640.967"
            height="481.195"
            rx="15.0374"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};
export default Hover;