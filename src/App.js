import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Error404 from './pages/Error404';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="/about" element={<AboutPage />}>
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
  );
}

export default App;
