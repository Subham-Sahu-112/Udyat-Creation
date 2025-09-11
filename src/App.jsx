import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page/landing-page';
import OurDesign from './pages/designs/OurDesigns';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/our-designs' element={<OurDesign />} />
      </Routes>
    </Router>
  )
}