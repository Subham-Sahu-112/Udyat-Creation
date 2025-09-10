import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landing-page/landing-page';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </Router>
  )
}