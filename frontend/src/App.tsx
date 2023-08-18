import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<>123</>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
