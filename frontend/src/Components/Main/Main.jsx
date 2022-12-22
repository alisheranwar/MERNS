import React, { Fragment } from 'react';
import {
  Image,
  Box,
  Heading,
  Container,
  Text,
  Img,
  Button,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../Images/main-page.jpg';
import image2 from '../../Images/2.jpg';
import image3 from '../../Images/3.webp';
import image4 from '../../Images/4.webp';
import ProductCard from '../Products/ProductCard.jsx';

const product = {
  name: 'Product1',
  image:
    'https://www.fc-moto.de/WebRoot/FCMotoDB/Shops/10207048/6343/D8EC/90DA/2F2B/AFD8/AC1E/140E/CEB4/323064002-1_ml.jpg',
  price: 23,
  inStock: 'Stock',
};

const Main = () => {
  return (
    <Fragment>
      <Box width={'100vw'} maxW={'100%'} minH={['auot', '80vh']}>
        <Carousel
          autoPlay={false}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
        >
          <Box>
            <Image src={image1} />
          </Box>
        </Carousel>
      </Box>
      <Heading
        maxW={['12rem', '15rem']}
        margin={'3vmax'}
        borderBottom={'3px solid black'}
      >
        Custom Suit's
      </Heading>

      <Box
        display={'flex'}
        marginLeft={'5rem'}
        gap={'1rem'}
        overflowX={'auto'}
        className={'overflow-proprties'}
      >
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}

        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}

        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
        {<ProductCard product={product} />}
      </Box>
      <Container
        display={'flex'}
        flexDirection={['column', 'column', 'row']}
        maxW={'90vw'}
        w={'90'}
        marginTop={'5rem'}
        marginBottom={'5rem'}
        gap={'1rem'}
      >
        <Box
          width={['100%', '100%', '50%']}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          lineHeight={'2rem'}
          gap={'2rem'}
        >
          <Heading> Custom Suit's</Heading>
          <Text>
            Give us your size guide & get exactly fitting suit. Most rider
            purchased suit's online. But there's no surety on any platoform this
            size is perfect on you. We have now just finish this tenison for our
            riders now get any brand suit's on any design suit. with your
            perfect measuerement. Also now we offer to you get your own desing
            like you can embed any logo your own compnay design or alos you can
            modified desgin too.
          </Text>
          <Button>Get Custom One</Button>
        </Box>
        <Box width={['100%', '100%', '40%']} height={'60vh'} boxShadow="lg">
          <Carousel
            autoPlay={false}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
          >
            <Box>
              <Img
                src={image2}
                alt="image"
                borderRadius={'100%'}
                maxH={'35rem'}
              />
            </Box>
            <Box>
              <Img
                src={image3}
                alt="image"
                borderRadius={'100%'}
                maxH={'35rem'}
              />
            </Box>
            <Box>
              <Img
                src={image4}
                alt="image"
                borderRadius={'100%'}
                maxH={['21rem', '35rem']}
              />
            </Box>
          </Carousel>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Main;
