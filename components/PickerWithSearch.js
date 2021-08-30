import React, { useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import icons from '../styles/iconMapper';

import { Spacing, Colors, FontSizes, Radius, Shadows } from '../styles/system';
import { Button, Icon, Input, Spacer } from '../styles/shared';
import useTranslation from '../hooks/useTranslations';


export default function PickerWithSearch({ list, onSelect }) {
  const translations = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const [selected, setSelected] = useState(() => list.find(l => l.selected));

  const onSelected = useCallback((option) => () => {
    setIsOpen(false);
    onSelect(option);
    setSelected(option);
    setKeyword(translations?.[option.label])
  }, [onSelect, translations]);

  const [keyword, setKeyword] = useState("");

  const onSearch = useCallback((value) => {
    setIsOpen(true);
    setKeyword(value)
  }, []);

  const filteredList = useMemo(() => list.filter(li => translations?.[li.label].toLocaleLowerCase("tr").includes(keyword.toLocaleLowerCase("tr"))), [list, keyword, translations]);

  const onToggle = useCallback(() => {
    setIsOpen(p => !p);
  }, []);

  return (
    <Container isOpen={isOpen}>
      <Search placeholder={translations.SEARCH} value={keyword} onChange={onSearch} onClick={onToggle} />
      {isOpen && <Options>
        {filteredList.map(option => <Option key={option.label} isSelected={option.label === selected?.label} onClick={onSelected(option)}>
          {option.label === selected?.label &&
            <>
              <Icon icon={icons.black.Check}></Icon>
              <Spacer size={Spacing.xxsmall} />
            </>}
          {translations?.[option.label] || option.label}
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
  position: relative;
  z-index: 22;
  &:hover {
    box-shadow: ${Shadows.large};
  }
`;

const Search = styled(Input)`
  width: 100%;
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
