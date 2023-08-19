import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainFooter } from './js/components/MainFooter';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import reset from './reset';

function App() {
  return (
    <BrowserRouter>
      <Global styles={reset} />
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
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 380px;
`;
