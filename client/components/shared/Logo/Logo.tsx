import { Flex, Image, Text } from '@chakra-ui/react';

interface LogoProps {
  isName: boolean;
  boxSize?: string;
}
const Logo = ({ isName, boxSize = '64px' }: LogoProps) => {
  return (
    <Flex alignItems="center" gap="8px">
      <Image
        src="/assets/img/logo/transparent.png"
        alt="logo pelican"
        boxSize={boxSize}
      />
      {isName && (
        <Text
          fontSize="2xl"
          fontFamily="Comfortaa, cursive"
          fontWeight="bold"
          color={'green.400'}
        >
          Pelican
        </Text>
      )}
    </Flex>
  );
};

export default Logo;
