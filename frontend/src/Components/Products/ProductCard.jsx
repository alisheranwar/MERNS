import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Img, Text, Box } from '@chakra-ui/react';

const ProductCard = ({ product }) => {
  return (
    <Fragment>
      <Box>
        <Link to={product.name}>
          <Img
            src={product.image}
            alt={product.name}
            maxH={'30rem'}
            max-W={'25rem'}
            padding={'1rem'}
          />
          <Text
            paddingTop={'10px'}
            paddingBottom={'8px'}
            justifyContent={'center'}
            display={'grid'}
            fontSize={'1.5rem'}
          >
            {product.name}
          </Text>
          <Text
            paddingTop={'5px'}
            paddingBottom={'5px'}
            justifyContent={'center'}
            display={'grid'}
            fontSize={'1.2rem'}
          >
            ${product.price}
          </Text>{' '}
          <Text
            paddingTop={'5px'}
            paddingBottom={'5px'}
            justifyContent={'center'}
            display={'grid'}
            fontSize={'1rem'}
          >
            {product.inStock}
          </Text>
          <Button
            paddingTop={'10px'}
            paddingBottom={'10px'}
            variant={'outline'}
            margin={'1vmax'}
            width={'100%'}
          >
            View Product
          </Button>
        </Link>
      </Box>
    </Fragment>
  );
};

export default ProductCard;
