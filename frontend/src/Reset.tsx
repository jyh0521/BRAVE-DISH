import { css } from '@emotion/react';

const reset = css`
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

export default reset;
