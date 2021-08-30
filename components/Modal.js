import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import icons from '../styles/iconMapper';

import { Spacing, Colors, FontSizes, Radius, Shadows } from '../styles/system';
import { Button, Icon, Spacer } from '../styles/shared';
import useModal from '../hooks/useModal';

export default function Modal({ title, preventClose, Actions = null, children }) {
  const { close } = useModal();
  return (
    <Container>
      <Head>
        <Title>{title}</Title>
        {Actions && <>{Actions} <Spacer size={Spacing.xxsmall} /></>}
        {!preventClose && <Close onClick={close}>
          <Icon icon={icons.black.Close}></Icon>
        </Close>}
      </Head>
      <Inner>{children}</Inner>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  min-width: ${Spacing.xxlarge * 8}rem;
  position: relative;
  background-color: ${Colors.secondaryBackground};
  border: 1px solid ${Colors.border};
  padding: ${Spacing.small}rem;
  border-radius: ${Radius.button}px;
  box-shadow: ${Shadows.largeDark};
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.span`
  font-weight: bold;
  margin-right: auto;
`;

const Close = styled(Button)`
  padding: ${Spacing.xxsmall}rem;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${Spacing.small}rem;
`;