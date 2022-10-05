import { useColorModeValue, Text, Box } from '@chakra-ui/react';

interface BannerCoverProps {
  label: string;
  children: JSX.Element;
}
const BannerCover = (props: BannerCoverProps) => {
  const whiteColor = useColorModeValue('gray.100', 'white');
  return (
    <main>
      <Box
        bgImage="/assets/img/ProfileBackground.png"
        w="100%"
        h="300px"
        bgPosition="50%"
        bgRepeat="no-repeat"
        display="flex"
        justifyContent="start"
        alignItems="center"
      ></Box>
      <Box w="96%" m="auto" transform="translate(0px, -200px)">
        <Text mb="10" color={whiteColor} fontWeight="bold" fontSize="32">
          {props.label}
        </Text>
        {props.children}
      </Box>
    </main>
  );
};

export default BannerCover;
