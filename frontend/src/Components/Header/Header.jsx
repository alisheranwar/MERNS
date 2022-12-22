import React from 'react';
import {
  Box,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  UnorderedList,
  ListItem,
  VStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';
import { CgMenuLeftAlt } from 'react-icons/cg';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      maxW={'100%'}
      h={'6rem'}
      alignItems={'center'}
      display={'flex'}
      justifyContent={'space-evenly'}
      borderBottom={'0.1px solid black'}
      boxShadow="md"
    >
      <Box display={['block', 'block', 'none']}>
        <Box>
          <Box onClick={onOpen} fontSize={'1.6rem'}>
            {<CgMenuLeftAlt />}
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader
                fontSize={'1.8rem'}
                fontWeight={'bold'}
                fontFamily={'sans-serif'}
              >
                <Link to="/">Widemotos</Link>
              </DrawerHeader>

              <VStack alignItems={'flex-start'} padding={'1.5rem'}>
                <Button variant={'ghost'} onClick={onClose}>
                  <Link to={'/'}>Home</Link>
                </Button>
                <Button variant={'ghost'} onClick={onClose}>
                  <Link to={'/shops'}>Shop</Link>
                </Button>
                <Button variant={'ghost'} onClick={onClose}>
                  <Link to={'/brands'}>Brands</Link>
                </Button>
                <Button variant={'ghost'} onClick={onClose}>
                  <Link to={'/custom'}>Custom</Link>
                </Button>
                <Button variant={'ghost'} onClick={onClose}>
                  <Link to={'/blogs'}>Blogs</Link>
                </Button>
              </VStack>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
      <Box fontSize={'1.8rem'} fontWeight={'bold'} fontFamily={'sans-serif'}>
        <Link to="/">Widemotos</Link>
      </Box>

      <Box display={['none', 'none', 'block']} _hover={'bgColor'}>
        <Box>
          <UnorderedList
            listStyleType={'none'}
            display={'flex'}
            gap={'2rem'}
            fontSize={'1.2rem'}
            fontWeight={'500'}
          >
            <ListItem
              transition={'all 0.1s'}
              _hover={{ borderBottom: ' 2px solid #66c47f' }}
            >
              <Link to={'/'}>Home</Link>
            </ListItem>
            <ListItem _hover={{ borderBottom: ' 2px solid #66c47f' }}>
              <Link to={'/shops'}>Shop</Link>
            </ListItem>
            <ListItem _hover={{ borderBottom: ' 2px solid #66c47f' }}>
              <Link to={'/brands'}>Brands</Link>
            </ListItem>
            <ListItem _hover={{ borderBottom: ' 2px solid #66c47f' }}>
              <Link to={'/custom'}>Custom</Link>
            </ListItem>
            <ListItem _hover={{ borderBottom: ' 2px solid #66c47f' }}>
              <Link to={'/blogs'}>Blogs</Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>

      <Box>
        <UnorderedList
          listStyleType={'none'}
          display={'flex'}
          gap={'1rem'}
          fontSize={'1.5rem'}
          fontWeight={'500'}
        >
          <ListItem>
            <Link>
              <FiSearch />
            </Link>
          </ListItem>
          <ListItem>
            <Link>
              <GoPerson />
            </Link>
          </ListItem>
          <ListItem>
            <Link>
              <FiShoppingCart />
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Header;
