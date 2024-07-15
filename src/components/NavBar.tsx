import { HStack, Image, Text } from '@chakra-ui/react';
import logoSource from '../assets/logo.png'

const NavBar = () => {
  return <HStack>
    <Image src={logoSource} boxSize='70px' alt='website logo' />
    <Text>NavBar</Text>
  </HStack>
};

export default NavBar;
