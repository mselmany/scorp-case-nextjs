import styled from '@emotion/styled';
import Image from 'next/image';
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';

import { Spacing, Colors, FontSizes, Radius, Shadows } from '../styles/system';

export const Spacer = styled.div`
  display: flex;
  position: relative;
  padding: ${({ column, size = Spacing.normal }) => column ? `${size}rem 0` : `0 ${size}rem`};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${Colors.secondaryBackground};
  border: 1px solid ${Colors.border};
  outline: 0;
  font-size: 1rem;
  padding: ${Spacing.xsmall}rem;
  cursor: pointer;
  border-radius: ${Radius.button}px;
  transition: .3s;
  &:not([disabled]):hover {
    box-shadow: ${Shadows.large};
  }
  &[disabled] {
    opacity: .75;
    cursor: not-allowed;
  }
  box-shadow: ${({ isActive }) => isActive ? Shadows.large : "none"};
`;

export function Icon({ icon, alt = "", size = Spacing.small }) {
  return <Image src={icon} alt={alt} width={size * 20} height={size * 20} objectFit="cover" />
}

export function Input({ validator = () => true, onChange, ...rest }) {
  const elem = useRef(null);

  const [valid, setValid] = useState(null);

  const onInputChange = useCallback((event) => {
    const isValid = elem?.current?.checkValidity() && validator?.(event.target.value);
    setValid(isValid);
    onChange(event.target.value, isValid);
  }, [onChange, validator]);

  // init validation
  useLayoutEffect(() => {
    onInputChange({ target: { value: rest.value } });
  }, []);

  if (rest.type === "textarea") {
    return <CustomTextarea ref={elem} {...{ ...rest, valid, onChange: onInputChange }}></CustomTextarea>
  }
  return <CustomInput ref={elem} {...{ ...rest, valid, onChange: onInputChange }}></CustomInput>
}

const CustomInput = styled.input`
  display: flex;
  align-items: center;
  background-color: ${Colors.background};
  border: 1px solid ${({ valid = null }) => valid === null ? Colors.border : valid ? Colors.success : Colors.error};
  outline: 0;
  font-size: 1rem;
  padding: ${Spacing.xsmall}rem;
  border-radius: ${Radius.button}px;
  transition: .3s;
  &:focus {
    box-shadow: ${Shadows.normal};
  }
`;

const CustomTextarea = styled.textarea`
  min-height: ${Spacing.xxlarge * 3}rem;
  display: flex;
  align-items: center;
  background-color: ${Colors.background};
  border: 1px solid ${({ valid = null }) => valid === null ? Colors.border : valid ? Colors.success : Colors.error};
  outline: 0;
  font-size: 1rem;
  padding: ${Spacing.xsmall}rem;
  border-radius: ${Radius.button}px;
  transition: .3s;
  &:focus {
    box-shadow: ${Shadows.normal};
  }
`;

export const Text = styled.span`
  font-weight: ${({ bold }) => bold ? "bold" : "normal"};
  text-decoration: ${({ underline }) => underline ? "underline" : "none"};
`;

export const Device = {
  Mobile({ children }) {
    const { isMobile } = useWindowSize();
    return isMobile ? children : null
  },
  Desktop({ children }) {
    const { isDesktop } = useWindowSize();
    return isDesktop ? children : null
  }
}