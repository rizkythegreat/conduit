import { Link } from 'react-router-dom';
import Box from '../components/Box';
import { menus } from '../utils/constants';

function Header() {
  return (
    <Box className={'w-full bg-transparent max-w-2xl mx-auto'}>
      <Box className={'flex justify-between items-center'}>
        <h1 className={'text-2xl font-bold'}>Conduit</h1>
        <Box className={'flex space-x-4'}>
          {menus.map((menu, index) => (
            <Link key={index} to={menu.link}>
              {menu.name}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
