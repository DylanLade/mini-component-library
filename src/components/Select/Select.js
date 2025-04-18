import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const [width, setWidth] = React.useState('auto');
  const textRef = React.useRef(null);
  const displayedValue = getDisplayedValue(value, children);

  // Update width when the displayed value changes
  React.useEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      // Add padding for the arrow and some buffer space
      setWidth(`${textWidth + 40}px`);
    }
  }, [displayedValue]);


  return (
    <SelectWrapper>
      <HiddenText ref={textRef}>{displayedValue}</HiddenText>
      <StyledSelect value={value} onChange={onChange} style={{width:width}}>
        {children}
      </StyledSelect>
      <SelectArrow id='chevron-down' size={16}/>
    </SelectWrapper>
  );
};

const HiddenText = styled.span`
  visibility: hidden;
  position: absolute;
  white-space: nowrap;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
`;

const SelectWrapper = styled.div`
  --color: ${COLORS.gray700};
  position: relative;
  display: inline-block;
  min-width: 50px;
  max-width: 400px;
  color: var(--color);

  &:hover {
    --color: ${COLORS.black};
  }
`;

const StyledSelect = styled.select`
  appearance: none;
  width: auto;
  min-width: 50px;
  max-width: 400px;
  padding: 8px 24px 8px 12px;
  color: var(--color);
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: .5em;
`;

const SelectArrow = styled(Icon)`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

export default Select;
