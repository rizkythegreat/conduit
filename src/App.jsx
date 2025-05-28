import AuthContext from '@/context/AuthContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NewArticle from '@/pages/NewArticle';
import Settings from '@/pages/Settings';
import Profile from '@/pages/Profile';
import LoginPage from '@/pages/LoginPage';
import { useEffect, useState } from 'react';
import HomePage from '@/pages/HomePage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/libs/firebase';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [authAction, setAuthAction] = useState({
    register: false,
    login: false
  });
  const [animation, setAnimation] = useState({
    register: '',
    login: '',
    menu: ''
  });
  console.log('user', user);
  const handleOpenModalRegister = () => {
    setAnimation((prev) => ({ ...prev, register: 'animate-fadeIn' }));
    setAuthAction((prev) => ({ ...prev, register: true }));
  };
  const handleOpenModalLogin = () => {
    setAnimation((prev) => ({ ...prev, login: 'animate-fadeIn' }));
    setAuthAction((prev) => ({ ...prev, login: true }));
  };

  const handleSignOutButton = () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        await auth.signOut();
        localStorage.removeItem('token');
        setLoggedIn(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        <Navigate to="/" />;
      }
    }, 1000);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoggedIn(true);
        localStorage.setItem('token', user.accessToken);
      } else {
        setUser(null);
        setLoggedIn(false);
        localStorage.removeItem('token');
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      document.body.classList.add('logged-in');
    } else {
      document.body.classList.remove('logged-in');
    }
  }, [loggedIn]);
  return (
    <Router>
      <AuthContext
        value={{
          user,
          loggedIn,
          loading,
          setLoggedIn,
          authAction,
          setAuthAction,
          animation,
          handleOpenModalRegister,
          handleOpenModalLogin,
          handleSignOutButton,
          setAnimation
        }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/*" element={<PrivateRoute />}>
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
