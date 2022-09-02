import { Flex, Box, Image, Badge, useColorModeValue } from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { currencyFormat } from 'utils/format';

interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        ({numReviews})
      </Box>
    </Box>
  );
}

interface ProductProps {
  isNewItem: boolean;
  imageURL: string;
  name: string;
  price: number;
  rating: number;
  numReviews: number;
  selected: boolean;
  handleClick: () => void;
}
function Product({
  isNewItem,
  imageURL,
  name,
  price,
  rating,
  numReviews,
  selected,
  handleClick,
}: ProductProps) {
  return (
    <Flex p="2" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        rounded="lg"
        shadow="lg"
        position="relative"
        borderWidth={selected ? '2px' : '1px'}
        borderColor={selected ? 'green.400' : 'inherit'}
        cursor="pointer"
        onClick={handleClick}
      >
        <Image
          src={imageURL}
          alt={`Picture of ${name}`}
          roundedTop="lg"
          pt="2"
        />
        <Box p="3">
          <Box display="flex" alignItems="baseline">
            {isNewItem && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="1xl" fontWeight="semibold" as="h4" textAlign="left">
              {name}
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={rating} numReviews={numReviews} />
          </Flex>
          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              {currencyFormat({ n: price })}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default Product;
