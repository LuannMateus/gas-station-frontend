import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fill from './pages/Fill';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abastecimentos/:id" element={<Fill />} />
        <Route path="/abastecimentos" element={<Fill />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
