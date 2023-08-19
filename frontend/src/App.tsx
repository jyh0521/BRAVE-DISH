import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainFooter } from './js/components/MainFooter';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

function App() {
  return (
    <BrowserRouter>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <Container>
        <Routes>
          <Route path="/test" element={<>13</>}></Route>
        </Routes>
        <MainFooter />
      </Container>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 380px;
`;
