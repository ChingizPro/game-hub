import { HStack, Image } from '@chakra-ui/react';
import logoSource from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack>
      <Image
        src={logoSource}
        boxSize={{ base: '60px', sm: '70px' }}
        alt='website logo'
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;