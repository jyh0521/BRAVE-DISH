import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainFooter } from './js/components/MainFooter';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import Reset from './reset';

function App() {
  return (
    <BrowserRouter>
      <Global styles={Reset} />
      <Container>
        <Routes>
          <Route path="/test" element={<>123</>}></Route>
        </Routes>
        <MainFooter />
      </Container>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  max-width: 380px;
`;
