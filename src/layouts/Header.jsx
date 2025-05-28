import { Link, useLocation } from 'react-router-dom';
import Box from '../components/atom/Box';
import { authenticatedMenus, unauthenticatedMenus } from '../utils/constants';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { List, X } from '@phosphor-icons/react';

function Header() {
  const [menus, setMenus] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  console.log('pathname', pathname);
  const {
    handleOpenModalRegister,
    handleOpenModalLogin,
    loggedIn,
    handleSignOutButton,
    animation,
    setAnimation
  } = useContext(AuthContext);

  const toggleMobileMenu = (type) => {
    if (type === 'close') {
      setAnimation((prev) => ({ ...prev, menu: 'animate-fadeOut' }));
      setTimeout(() => {
        setAnimation((prev) => ({ ...prev, menu: '' }));
        setMobileMenuOpen(false);
      }, 300);
    } else {
      setAnimation((prev) => ({ ...prev, menu: 'animate-fadeIn' }));
      setMobileMenuOpen(true);
    }
  };

  const isActive = (menuLink) => {
    return pathname === menuLink || (menuLink !== '/' && pathname.startsWith(menuLink));
  };

  useEffect(() => {
    if (loggedIn) {
      setMenus(authenticatedMenus);
    } else {
      setMenus(unauthenticatedMenus);
    }
  }, []);
  return (
    <>
      <Box className={'w-full bg-transparent mx-auto my-5'}>
        <Box
          className={
            'flex justify-between md:max-w-2xl xl:max-w-5xl 2xl:max-w-7xl mx-5 max-w-sm md:mx-auto items-center'
          }>
          <h1 className={'text-2xl font-bold'}>Conduit</h1>

          {/* Desktop Menu */}
          <Box className={`${loggedIn ? 'hidden md:flex space-x-4' : 'flex space-x-4'}`}>
            {loggedIn
              ? menus?.map((menu, index) =>
                  menu?.name === 'Sign out' ? (
                    <button
                      onClick={() => handleSignOutButton()}
                      className="px-4 py-2 text-sm transition-btn"
                      key={index}>
                      {menu.name}
                    </button>
                  ) : (
                    <Link
                      className={`px-4 py-2 text-sm ${isActive(menu.link) ? 'text-black' : 'text-gray-500 hover:text-black transition-btn'}`}
                      key={index}
                      to={menu.link}>
                      {menu.name}
                    </Link>
                  )
                )
              : menus?.map((menu, index) =>
                  menu?.name === 'Get Started' ? (
                    <button
                      onClick={() => handleOpenModalRegister()}
                      className="rounded-full px-4 py-2 text-white text-sm bg-black hover:bg-gray-800 transition-btn"
                      key={index}>
                      {menu.name}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleOpenModalLogin()}
                      className="hover:cursor-pointer py-2 px-2 text-sm"
                      key={index}>
                      {menu.name}
                    </button>
                  )
                )}
          </Box>

          {/* Mobile Menu Button */}
          {loggedIn && (
            <button
              className="md:hidden p-2 rounded-md focus:outline-none"
              onClick={
                mobileMenuOpen ? () => toggleMobileMenu('close') : () => toggleMobileMenu('open')
              }>
              {mobileMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
            </button>
          )}
        </Box>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <Box
            className={`${animation.menu} md:hidden fixed top-16 right-5 z-50 w-4/5 max-w-xs px-5 py-4 bg-white shadow-xl rounded-xl space-y-2`}>
            {menus?.map((menu, index) =>
              loggedIn ? (
                menu?.name === 'Sign out' ? (
                  <button
                    onClick={() => {
                      handleSignOutButton();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-100 rounded"
                    key={index}>
                    {menu.name}
                  </button>
                ) : (
                  <Link
                    className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-100 rounded"
                    key={index}
                    to={menu.link}
                    onClick={() => setMobileMenuOpen(false)}>
                    {menu.name}
                  </Link>
                )
              ) : menu?.name === 'Get Started' ? (
                <button
                  onClick={() => handleOpenModalRegister()}
                  className="rounded-full px-4 py-2 text-white text-sm bg-black hover:bg-gray-800 transition-btn"
                  key={index}>
                  {menu.name}
                </button>
              ) : (
                <button
                  onClick={() => handleOpenModalLogin()}
                  className="hover:cursor-pointer py-2 px-2 text-sm"
                  key={index}>
                  {menu.name}
                </button>
              )
            )}
          </Box>
        )}
      </Box>
      <hr className={`${loggedIn ? 'border-gray-400/20' : ''}`} />
    </>
  );
}

export default Header;
