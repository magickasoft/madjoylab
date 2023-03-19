import React from 'react';

export const call = ({color = '#009688', ...rest}: any) => (
  <svg viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.29947 1.6318C3.60567 1.36331 3.97334 1.15503 4.37813 1.02077C4.78292 0.886507 5.21558 0.829323 5.64744 0.853008C6.0793 0.876693 6.5005 0.980706 6.88312 1.15815C7.26574 1.3356 7.60105 1.58243 7.86683 1.88229L11.008 5.42604C11.5837 6.07609 11.7867 6.92284 11.5592 7.72195L10.602 11.0874C10.5525 11.2618 10.5552 11.4443 10.6098 11.6175C10.6643 11.7906 10.769 11.9484 10.9135 12.0756L15.2131 15.8514C15.3581 15.9786 15.5381 16.0706 15.7355 16.1185C15.933 16.1665 16.1413 16.1687 16.3401 16.1249L20.1707 15.2843C20.6198 15.1857 21.0885 15.1781 21.5414 15.2619C21.9943 15.3458 22.4196 15.519 22.7851 15.7684L26.8205 18.5253C28.2712 19.5165 28.4042 21.3991 27.1057 22.5378L25.2963 24.1268C24.0013 25.264 22.0659 25.7634 20.2617 25.2056C15.6439 23.7788 11.4512 21.4572 7.99457 18.4132C4.52844 15.3781 1.88483 11.6967 0.259816 7.64204C-0.373664 6.05919 0.195068 4.358 1.49003 3.2208L3.29947 1.6318Z"
      fill={color}
    />
  </svg>
);