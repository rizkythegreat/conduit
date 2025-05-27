import { Link } from 'react-router-dom';
import Box from '../components/atom/Box';
import { authenticatedMenus, unauthenticatedMenus } from '../utils/constants';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { List, X } from '@phosphor-icons/react';

function Header() {
  const [menus, setMenus] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleOpenModalRegister, handleOpenModalLogin, loggedIn, handleSignOutButton } =
    useContext(AuthContext);

  useEffect(() => {
    if (loggedIn) {
      setMenus(authenticatedMenus);
    } else {
      setMenus(unauthenticatedMenus);
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
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
                    <Link className="px-4 py-2 text-sm" key={index} to={menu.link}>
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
              onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
            </button>
          )}
        </Box>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <Box className="md:hidden mt-4 px-5 py-3 bg-white shadow-lg rounded-lg">
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
