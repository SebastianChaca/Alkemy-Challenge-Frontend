import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  Flex,
  Box,
  Spacer,
  Image,
  Button,
  Container,
  useDisclosure,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TextHover, LogBtn } from './LayoutComponents/CustomComponents';

import Logo from '../../img/logo-header.png';
import Sidebar from './Sidebar';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const containerResponsive = {
    base: 'none',
    sm: 'none',
    md: 'flex',
    lg: 'flex',
    xl: 'flex',
  };
  return (
    <div>
      <Flex as="nav" p="5" borderBottom="1px" borderColor="gray.200">
        <Button
          display={{ sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}
          onClick={onOpen}
          background="none"
        >
          <GiHamburgerMenu style={{ fontSize: 30 }} />
          <Sidebar isOpen={isOpen} onClose={onClose} />
        </Button>
        <Container display={containerResponsive} maxW="container.xl">
          <Box>
            <Image src={Logo} alt="Alkemy Logo" />
          </Box>
          <Spacer />

          <Flex ml="70px">
            <TextHover link="/" children={'Home'} />
            <TextHover link="/operaciones" children={'Operaciones'} />
          </Flex>

          <Spacer />
          <LogBtn />
        </Container>
        <Spacer />
        <ColorModeSwitcher mr="15px" />
      </Flex>
    </div>
  );
};

export default Header;
