import { css } from '@emotion/react';

const Reset = css`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;

    &,
    &::after,
    &::before {
      box-sizing: border-box;
    }
  }
`;

export default Reset;
