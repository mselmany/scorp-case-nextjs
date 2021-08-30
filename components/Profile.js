import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import icons from '../styles/iconMapper';

import { Spacing, Colors, FontSizes, Radius, Shadows } from '../styles/system';
import { Button, Icon, Input, Spacer, Text } from '../styles/shared';
import useTranslation from '../hooks/useTranslations';
import useUser from '../hooks/useUser';
import Login from '../components/Login';
import useModal from '../hooks/useModal';


export default function Profile() {
  const translations = useTranslation();
  const { open } = useModal();
  const { user, logout } = useUser();
  const [showProfile, setShowProfile] = useState(false);

  const openLogin = useCallback(() => {
    open(<Login />);
  }, [open]);

  const onShowProfile = useCallback(() => {
    setShowProfile(p => !p);
  }, []);

  if (!user) {
    return <Button onClick={openLogin}>
      <Icon icon={icons.black.Login} />
      <Spacer size={Spacing.xxsmall} />
      {translations.LOGIN}
    </Button>
  }

  return <Container isOpen={showProfile}>
    <Button isActive={showProfile} onClick={onShowProfile}>
      <Icon icon={icons.black.Account} />
      <Spacer size={Spacing.xxsmall} />
      {user.email}
    </Button>
    {showProfile &&
      <Card>
        <Row>
          <Text bold>{user.name}</Text>
          <Spacer size={Spacing.xxsmall} />
          <Icon icon={icons.black.Account} />
        </Row>
        <MiniButton onClick={logout}>
          <Icon icon={icons.black.Logout} />
          <Spacer size={Spacing.xxsmall} />
          {translations.LOGOUT}
        </MiniButton>
      </Card>}
  </Container>
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;right:-1px;
  min-width: ${Spacing.xxlarge * 5}rem;
  margin-top: ${Spacing.xxsmall}rem;
  padding: ${Spacing.xsmall}rem;
  background-color: ${Colors.secondaryBackground};
  border: 1px solid ${Colors.border};
  font-size: 1rem;
  border-radius: ${Radius.button}px;
  box-shadow: ${Shadows.large};
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  padding: ${Spacing.xxsmall}rem 0;
`;

const Container = styled.span`
  display: flex;
  align-items: center;
  position: relative;
`;

const MiniButton = styled(Button)`
  margin-top: ${Spacing.xsmall}rem;
  padding: ${Spacing.xxsmall}rem;
  font-size: ${FontSizes.small}rem;
  justify-content: center;
`;