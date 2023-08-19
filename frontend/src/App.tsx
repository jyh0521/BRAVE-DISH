import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainFooter } from './js/components/MainFooter';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
<<<<<<< HEAD
import {MapTest} from "./MapTest.tsx";
import {MapDirectionTest} from "./MapDirectionTest.tsx";
import {MapMain} from "./MapMain.tsx";
=======
import { MapTest } from './MapTest.tsx';
import { Challenges } from './js/Challenges.tsx';
import { ChallengeDetail } from './js/ChallengeDetail.tsx';
import { QRCamera } from './js/QRCamera.tsx';
>>>>>>> 9aaa13fd67eadb5c8518835785cd616e8d36ca03

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
          <Route path="/test" element={<>123</>}></Route>
          <Route path="/map_test" element={<MapTest/>}></Route>
          <Route path="/map_direction_test" element={<MapDirectionTest/>}></Route>
          <Route path="/map_main" element={<MapMain/>}></Route>
          <Route path="/" element={<MapTest />}></Route>
          <Route path="/challenge" element={<Challenges />}></Route>
          <Route path="/challenge/detail" element={<ChallengeDetail />}></Route>
          <Route path="/camera" element={<QRCamera />}></Route>
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
