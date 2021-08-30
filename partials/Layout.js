import styled from '@emotion/styled';

export default function Layout({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
`;
