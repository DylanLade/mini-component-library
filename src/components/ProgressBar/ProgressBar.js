/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--borderRadiusOuter": 8 + "px",
    "--borderRadiusInner": 6 + "px", 
    "--height": "8px",
    "--padding": "0px",
  },
  medium: {
    "--borderRadiusOuter": 4 + "px",
    "--borderRadiusInner": 4 + "px", 
    "--height": "12px",
    "--padding": "0px",
  },
  large: {
    "--borderRadiusOuter": 8 + "px",
    "--borderRadiusInner": 4 + "px",    
    "--height": "24px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  const isAlmostComplete = value >= 99;

  return <ProgBarBase className={isAlmostComplete ? 'almost-complete' : ''} max="100" value={value} style={styles}></ProgBarBase>;
};

const ProgBarBase =  styled.progress`
    &[value] {
      -webkit-appearance: none;
      appearance: none;
      
      --color: ${COLORS.primary};
      --background: ${COLORS.transparentGray15};

      width: 500px;
      height: var(--height);
      border-radius:var(--borderRadiusOuter);
    }

    &[value]::-webkit-progress-bar {
      border-radius:var(--borderRadiusOuter);
      background: var(--background);
      padding: var(--padding);
    }

    &[value]::-webkit-progress-value {
      border-radius: var(--borderRadiusInner);
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      background: var(--color);
    }

    &.almost-complete[value]::-webkit-progress-value {
      border-top-right-radius: var(--borderRadiusInner);
      border-bottom-right-radius: var(--borderRadiusInner);
    }
`;

export default ProgressBar;
