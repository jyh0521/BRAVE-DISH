import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainFooter } from './js/components/MainFooter';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { MapTest } from './MapTest.tsx';
import { Challenges } from './js/Challenges.tsx';

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
          <Route path="/" element={<MapTest />}></Route>
          <Route path="/challenge" element={<Challenges />}></Route>
          <Route path="/feed" element={<>feed</>}></Route>
          <Route path="/rank" element={<>rank</>}></Route>
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
