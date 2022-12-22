import React from 'react';
import { Button, Container, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ErrorScreen = () => {
  return (
    <Container
      minH={'80vh'}
      display={'grid'}
      placeContent={'center'}
      gap={'1rem'}
    >
      <Heading>Not Exist | 404</Heading>
      <Button variant={'outline'} margin={'auto'}>
        <Link to="/">Go to Home Page</Link>
      </Button>
    </Container>
  );
};

export default ErrorScreen;
