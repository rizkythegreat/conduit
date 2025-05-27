import { Link } from 'react-router-dom';
import Box from '../components/atom/Box';
import { authenticatedMenus, unauthenticatedMenus } from '../utils/constants';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menus, setMenus] = useState([]);
  const { handleOpenModalRegister, handleOpenModalLogin } = useContext(AuthContext);

  useEffect(() => {
    setIsAuthenticated(false);
    if (isAuthenticated) {
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
            'flex justify-between md:max-w-2xl xl:max-w-5xl mx-5 max-w-sm md:mx-auto items-center'
          }>
          <h1 className={'text-2xl font-bold'}>Conduit</h1>
          <Box className={'flex space-x-4'}>
            {isAuthenticated
              ? menus?.map((menu, index) => (
                  <Link className="px-4 py-2 text-sm" key={index} to={menu.link}>
                    {menu.name}
                  </Link>
                ))
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
        </Box>
      </Box>
      <hr />
    </>
  );
}

export default Header;
