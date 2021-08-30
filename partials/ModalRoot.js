import styled from '@emotion/styled';

import { Spacing, Colors } from '../styles/system';
import useModal from '../hooks/useModal';
import { cloneElement, useMemo } from 'react';

export default function ModalRoot() {
  const { current, close } = useModal();

  const CurrentModal = useMemo(() => current ? cloneElement(current, { close }) : null, [current, close])

  return (
    <Container visible={!!CurrentModal}>
      <Overlay onClick={close} />
      <Inner visible={!!CurrentModal}>{CurrentModal}</Inner>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top:0;left:0;bottom:0;right:0;
  z-index: 200;
  transition: .3s;
  visibility: ${({ visible }) => visible ? "visible" : "hidden"};
  opacity: ${({ visible }) => visible ? 1 : 0};
`;

const Overlay = styled.div`
  display: flex;
  position: absolute;
  top:0;left:0;right:0;bottom:0;
  z-index: 0;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: .3s;
  transform: translateY(${({ visible }) => visible ? 0 : -30}px);
`;