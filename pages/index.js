import styled from '@emotion/styled';

import { Spacing, FontSizes } from '../styles/system';
import { Spacer, Text } from '../styles/shared';
import useTranslation from '../hooks/useTranslations';
import useUser from '../hooks/useUser';

Home.title = "HOMEPAGE";

export default function Home() {
  const translations = useTranslation();

  const { user } = useUser();

  return <Center>
    <Title bold>Scorp Test Case</Title>
    <Spacer size={Spacing.small} column />
    {user && <Text bold>{user.name}</Text>}
    <Spacer size={Spacing.small} column />
    <Text bold>{translations.HOMEPAGE_TEXT}</Text>
  </Center>;
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;
  padding: ${Spacing.xxlarge}rem;
`;

const Title = styled(Text)`
  font-size: ${FontSizes.xxlarge}rem;
`;
