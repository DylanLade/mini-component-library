import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": "24px",
  },
  large: {
    "--height": "36px",
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = { ...SIZES[size], '--width': width + 'px' };
  return (
    <SearchWrapper style={{ width: width }}>
      <SearchIcon id={icon}/>
      <HiddenText useRef={label}>{placeholder}</HiddenText>
      <SearchField style={styles} placeholder={placeholder}></SearchField>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  position: relative;
  padding: 2px;
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

const HiddenText = styled(VisuallyHidden)``;

const SearchField = styled.input`
  height: var(--height);
  width: var(--width);
  padding: 8px 0px 8px 24px;
  border-color: transparent;
  border-bottom: 2px solid ${COLORS.gray700};

  &:focus {
    outline-offset: 4px;
  }
  
  &:hover {
    font-weight: bold;
  }
  &:hover::placeholder {
    font-weight: normal;
  }
`;

export default IconInput;
