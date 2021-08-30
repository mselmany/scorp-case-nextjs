import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import icons from '../styles/iconMapper';

import { Spacing, Colors, FontSizes, Radius, Shadows } from '../styles/system';
import { Button, Icon, Input, Spacer } from '../styles/shared';


export default function Toggle({ options, onToggle }) {
  const onChange = useCallback((option) => () => {
    onToggle(option);
  }, [onToggle])

  return <Options>
    {options.map(option => <Option key={option.label} isSelected={option.selected} onClick={onChange(option)} >{option.label}</Option>)}
  </Options>;
}

const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.secondaryBackground};
  border: 1px solid ${Colors.border};
  outline: 0;
  font-size: 1rem;
  padding: ${Spacing.xxsmall}rem;
  cursor: pointer;
  border-radius: ${Radius.button}px;
`;

const Option = styled.div`
  padding: 0 ${Spacing.xxsmall}rem;
  font-size: ${FontSizes.small}rem;
  font-weight: ${({ isSelected }) => isSelected ? "bold" : "normal"};
  opacity: ${({ isSelected }) => isSelected ? "1" : ".5"};
`;