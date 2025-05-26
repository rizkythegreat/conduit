import AuthContext from '@/context/AuthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewArticle from '@/pages/NewArticle';
import Settings from '@/pages/Settings';
import Profile from '@/pages/Profile';
import LoginPage from '@/pages/LoginPage';
import { useState } from 'react';
import HomePage from '@/pages/HomePage';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false);
  const [authAction, setAuthAction] = useState({
    register: false,
    login: false
  });
  const [animation, setAnimation] = useState({
    register: '',
    login: ''
  });
  const handleOpenModalRegister = () => {
    setAnimation((prev) => ({ ...prev, register: 'animate-fadeIn' }));
    setAuthAction((prev) => ({ ...prev, register: true }));
  };
  const handleOpenModalLogin = () => {
    setAnimation((prev) => ({ ...prev, login: 'animate-fadeIn' }));
    setAuthAction((prev) => ({ ...prev, login: true }));
  };
  return (
    <Router>
      <AuthContext
        value={{
          loggedIn,
          setLoggedIn,
          authAction,
          setAuthAction,
          animation,
          handleOpenModalRegister,
          handleOpenModalLogin,
          setAnimation
        }}>
        <Routes>
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
