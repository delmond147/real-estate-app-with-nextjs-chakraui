import Link from 'next/link'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import {BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi'

const Navbar = () => (
    <Flex p='2' borderBottom='1px' borderColor='gray.100'>
        <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
            <Link href='/' paddingLeft='2'>Dgitour</Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant='outlined' color='red.400' />
                <MenuList>
                    <Link href='/' passHfref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href='/search' passHfref>
                        <MenuItem icon={<BsSearch />}>search</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-sale' passHfref>
                        <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-rent' passHfref>
                        <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
);

export default Navbar;