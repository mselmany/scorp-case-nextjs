import Image from 'next/image';
import styled from '@emotion/styled';

import { Spacing, Colors } from '../styles/system';
import useTranslation from '../hooks/useTranslations';

export default function Footer(props) {
  const translations = useTranslation()

  return (
    <Container>
      <Link
        href="https://www.linkedin.com/in/mselmany"
        target="_blank"
        rel="noopener noreferrer"
      >
        {translations.DEVELOPED_BY} mselmany
        <AvatarContainer>
          <Avatar src="/1516892835767.jpeg" alt="mselmany" width={Spacing.xxlarge * 10} height={Spacing.xxlarge * 10} />
        </AvatarContainer>
        @2021
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${Spacing.normal}rem;
  border-top: 1px solid ${Colors.border};
`;

const Link = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const AvatarContainer = styled.div`
  display: flex;
  padding: ${Spacing.xsmall}rem;
`

const Avatar = styled(Image)`
  border-radius: 50%;
`