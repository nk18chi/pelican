import { Flex, Text, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

const SignInLinkButton = () => {
  return (
    <NextLink href={`/signin`}>
      <Button
        bg="none"
        boxSize="initial"
        justifyContent="flex-end"
        alignItems="center"
        p="12px"
        _active={{
          bg: 'inherit',
          transform: 'none',
          borderColor: 'transparent',
        }}
        _focus={{ boxShadow: 'none' }}
      >
        <Flex>
          <Text my="auto" fontSize="sm">
            Sign In
          </Text>
        </Flex>
      </Button>
    </NextLink>
  );
};

export default SignInLinkButton;
