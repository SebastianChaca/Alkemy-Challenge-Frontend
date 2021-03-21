import React from 'react';
import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  Text,
  Flex,
  Grid,
} from '@chakra-ui/react';
import Logo from '../../img/logo-header.png';
import { TextHoverDrawer, LogBtn } from './LayoutComponents/CustomComponents';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton mt="5px" />
            <DrawerHeader>
              <Flex>
                <Image src={Logo} alt="Alkemy Logo" />
                <Text m="auto">Menú</Text>
              </Flex>
            </DrawerHeader>
            <Grid ml="25px" mt="25px" templateRows="repeat(3)" gap={10} w="50%">
              <TextHoverDrawer children={'Home'} link={'/'} onClose={onClose} />
              <TextHoverDrawer
                children={'Operaciones'}
                link={'/operaciones'}
                onClose={onClose}
              />

              <LogBtn />
            </Grid>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Sidebar;
