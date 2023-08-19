import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainFooter } from './js/components/MainFooter.js';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { MapTest } from './MapTest.tsx';
import { MapDirectionTest } from './MapDirectionTest.tsx';
import { MapMain } from './MapMain.tsx';
import { Challenges } from './js/Challenges.tsx';
import { QRCamera } from './js/QRCamera.tsx';
import { MissionCompleted } from './js/MissionCompleted.tsx';
import { Feed } from './js/Feed.tsx';

function App() {
  return (
    <BrowserRouter>
      <Global
        styles={css`
          @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css');
          ${emotionReset}
        `}
      />
      <Container>
        <Routes>
          <Route path="/map_test" element={<MapTest />}></Route>
          <Route path="/map_direction_test" element={<MapDirectionTest />}></Route>
          <Route path="/map_main" element={<MapMain />}></Route>
          <Route path="/" element={<MapTest />}></Route>
          <Route path="/challenge" element={<Challenges />}></Route>
          <Route path="/camera" element={<QRCamera />}></Route>
          <Route path="/mission/completed" element={<MissionCompleted />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
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
