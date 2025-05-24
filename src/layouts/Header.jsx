import Box from '../components/Box'

function Header() {
    const menus = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'New Article',
            link: '/new'
        },
        {
            name: 'Settings',
            link: '/settings'
        },
        {
            name: 'Profile',
            link: '/profile'
        }
    ]
    return (
        <Box className={'w-full bg-transparent'}>
            <div className={'flex justify-between items-center'}>
                <h1 className={'text-2xl font-bold'}>Conduit</h1>
                <div className={'flex space-x-4'}>
                    {menus.map((menu, index) => (
                        <a key={index} href={menu.link}>{menu.name}</a>
                    ))}
                </div>
            </div>
        </Box>
    )
}

export default Header