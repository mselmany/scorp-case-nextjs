import React, { useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import icons from '../styles/iconMapper';

import { Spacing, Colors, FontSizes, Radius, Shadows } from '../styles/system';
import { Button, Icon, Spacer } from '../styles/shared';


export default function Picker({ list, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const selected = useMemo(() => list.find(l => l.selected), [list])

  const onSelected = useCallback((option) => () => {
    setIsOpen(false);
    onSelect(option);
  }, [onSelect]);

  return (
    <Container isOpen={isOpen}>
      <Label onClick={() => setIsOpen(p => !p)}>
        <Icon icon={icons.black.ArrowDown} />
        <Spacer size={Spacing.xxsmall} />
        {selected.label}
      </Label>
      {isOpen && <Options>
        {list.map(option => <Option key={option.label} isSelected={option.label === selected.label} onClick={onSelected(option)}>
          {option.label}
        </Option>)}
      </Options>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${Colors.secondaryBackground};
  border: 1px solid ${Colors.border};
  outline: 0;
  font-size: 1rem;
  cursor: pointer;
  border-radius: ${Radius.button}px;
  transition: .3s;
  box-shadow: ${({ isOpen }) => isOpen ? Shadows.large : "none"};
  &:hover {
    box-shadow: ${Shadows.large};
  }
`;

const Label = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${Spacing.xsmall}rem;
`;

const Options = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 100%;
  margin-top: ${Spacing.xxsmall}rem;
  background-color: ${Colors.secondaryBackground};
  border: 1px solid ${Colors.border};
  border-radius: ${Radius.button}px;
  box-shadow: ${Shadows.large};
`;

const Option = styled(Label)`
  width: 100%;
  white-space: nowrap;
  &:not(:last-child){
    border-bottom: 1px solid ${Colors.border};
  }
  &:hover{
    background-color: ${Colors.border};
  }
  text-decoration: ${({ isSelected }) => isSelected ? "underline" : "none"};
`;
