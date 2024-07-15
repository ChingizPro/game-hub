import { HStack, Image } from '@chakra-ui/react';
import logoSource from '../assets/logo.png'
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return <HStack justifyContent={'space-between'}>
    <Image src={logoSource} boxSize='70px' alt='website logo' />
    <ColorModeSwitch />
  </HStack>
};

export default NavBar;
