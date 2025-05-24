import AuthContext from './context/AuthContext';
import HomePage from './pages/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewArticle from './pages/NewArticle';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';
import RegisterPage from './pages/RegisterPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false);
  return (
    <Router>
      <AuthContext value={{ loggedIn, setLoggedIn }}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/*">
            <Route path="homepage" element={<HomePage />} />
            <Route path="new" element={<NewArticle />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </AuthContext>
    </Router>
  );
}

export default App;
