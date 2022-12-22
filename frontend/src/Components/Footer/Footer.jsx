import React from 'react';
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box minH={'20vh'} height={'auto'} bgColor={'aliceblue'} maxWidth={'100%'}>
      <Box
        display={'flex'}
        alignItems={['flex-start', 'center']}
        justifyContent={['space-evenly']}
        flexDirection={['column', 'column', 'row']}
        padding={['2rem', '0rem']}
      >
        {/* <Text borderBottom={'5px solid white'} width={'30%'}></Text>  */}
        <Box fontSize={'2rem'} paddingTop={'2rem'}>
          <Link to="/">WideMotos</Link>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'flex-start'}
          marginBottom={'2rem'}
          marginTop={'1rem'}
        >
          <Text padding={'0rem 1rem'}>Quick Links</Text>
          <Button variant={'ghost'}>Privacy Policy</Button>
          <Button variant={'ghost'}>Shipping information</Button>
          <Button variant={'ghost'}>Terms & condition</Button>
          <Button variant={'ghost'}>Return or Exchange</Button>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'flex-start'}
          marginBottom={'2rem'}
          marginTop={'2rem'}
        >
          <Text padding={'0rem 1rem'}>Useful Info</Text>
          <Button variant={'ghost'}>Size Guide</Button>
          <Button variant={'ghost'}>How to Order</Button>
          <Button variant={'ghost'}>Becomer Seller</Button>
          <Button variant={'ghost'}>Blogs</Button>
          <Button variant={'ghost'}>Who we are</Button>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'flex-start'}
          marginBottom={'2rem'}
          marginTop={'1rem'}
        >
          <Text padding={'0rem 1rem'}>Make a Query</Text>
          <HStack>
            <Button variant={'ghost'} leftIcon={<AiOutlineWhatsApp />}>
              <a href="https://wa.me/923256101427" target="blank">
                What's app
              </a>
            </Button>{' '}
            <Button variant={'ghost'} leftIcon={<AiOutlineMail />}>
              <a href="mailto:support@widemotos.com">Email Us</a>
            </Button>
          </HStack>
          <Text marginTop={'2rem'} padding={'0rem 1rem'}>
            Follow Us
          </Text>
          <HStack>
            <Button variant={'ghost'} leftIcon={<AiFillFacebook />}>
              <a href="https://www.facebook.com/widemotos/" target="blank">
                Facebook
              </a>
            </Button>
            <Button variant={'ghost'} leftIcon={<AiOutlineInstagram />}>
              <a href="https://www.instagram.com/widemotos/" target="blank">
                Instagram
              </a>
            </Button>
          </HStack>
        </Box>
      </Box>
      <Box
        h={'1rem'}
        display={'flex'}
        justifyContent={'flex-end'}
        margin={'auto'}
        maxW={'70%'}
        paddingBottom={'3rem'}
      >
        Widemotos || All right reserved &copy;
      </Box>
    </Box>
  );
};

export default Footer;
