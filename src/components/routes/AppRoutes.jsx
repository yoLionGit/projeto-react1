import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contato from '../pages/Contato';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
